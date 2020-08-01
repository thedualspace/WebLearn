if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}
const path = require('path');
const express = require('express');
const passport = require('passport');
const session = require('express-session');
const flash = require('express-flash');
const bodyParser = require('body-parser');
const sqlite = require('sqlite3');
const cors = require("cors");
const initializePassport = require('./passport-config');
const authRoutes = require("./routes/auth-routes");
const MarkMCQ = require('./MarkMCQ');

const app = express();
const PORT = 8000;
const db = new sqlite.Database('./sqlite/users.db', err => {
  if (err) {
    throw err;
  }
});

//Initialize passport authentication module using passport-config.js imported above.
//The two callback functions here search the SQL database for a user with a certain email
// or id. This allows passport to serialise and deserialise users when required.
initializePassport(
  passport, 
  email => {
    return new Promise((resolve, reject) => {
      db.get('SELECT * FROM users WHERE EMAIL = ?', email, function(err, row) {
        if (err) {
          reject(err)
        } else {
          resolve(row) ;
        }
      })
    })
  },
  id => {
    return new Promise((resolve, reject) => {
      db.get('SELECT * FROM users WHERE id = ?', id, function(err, row) {
        if (err) {
          reject(err)
        } else {
          resolve(row) ;
        }
      })
    })
  }
);

app.use('/', bodyParser.urlencoded({extended: false}));
app.use(flash());
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(
  cors({
    origin: "http://localhost:3000", // allow to server to accept request from different origin
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true // allow session cookie from browser to pass through
  })
);


//Handles all authentication related routes defined in auth-routes.js


//endpoint for accepting submitted MCQ forms.
app.post('/mcqsubmit/:quizname', (req, res, next) => {
  console.log('MCQ submitted! Result pending...')
  const result = MarkMCQ(req.params.quizname, req.body);
  console.log(result);
  const query = "UPDATE results SET " + req.params.quizname + " = ? WHERE username = ?";
  db.run(query, [ result, req.user.username])  
  res.redirect('/dashboard');
  next();
})

//Endpoint for reading results
app.get('/sql/results', (req, res) => {
  db.get("SELECT * FROM results WHERE username = ?", req.user.username, (err, rows) => {
    res.json(rows)
  });
});

app.use("/auth", authRoutes);

app.use(express.static(path.join(__dirname, 'build')));
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});


app.listen(PORT, () => {
  console.log(`Server started at http:localhost:${PORT}`)
});