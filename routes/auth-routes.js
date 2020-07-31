const sqlite = require('sqlite3');
const router = require("express").Router();
const passport = require("passport");
const bcrypt = require('bcrypt');

//Read in the database containing a users table and results table.
const db = new sqlite.Database('./sqlite/users.db', err => {
  if (err) {
    throw err;
  }
});

//Registration form requests are handled here. On receipt of a registration form, 
//the password is hashed and the username, email, and hashed password and stored in the users table.
//An entry is also made to the results table with the submitted username. MCQ scores are 0 by default.
//Redirected to login on successful registration.
router.post('/register', checkNotAuthenticated, async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    
    db.run("INSERT INTO users (username, password, email) VALUES (?,?,?)", 
      [req.body.username, hashedPassword, req.body.email], 
      function(err) {
        if (err) {
          console.log(err);
        }
       });

    db.run("INSERT INTO results (username, SQL, NOSQL, XSS, CSRF) VALUES (?,?,?,?,?)", 
    [req.body.username, 0, 0, 0, 0], 
    function(err) {
      if (err) {
        console.log(err);
      }
    });    
    res.redirect('/login')
  } catch {
    res.redirect('/register')
  }
})

//Authorize with local strategy, redirect to dashboard on success
router.post('/login', checkNotAuthenticated, passport.authenticate('local', {
  successRedirect: '/dashboard',
  failureRedirect: '/login',
  failureFlash: true
}))

//Skips re-registering users which are already logged in
function checkAuthenticated(res, res, next) {
  if (req.user) {
    return next()
  }
  return res.redirect('/login')
}

//Skips checking the database for a user if the user is already logged in
function checkNotAuthenticated(req, res, next) {
  if (req.user) {
    return res.redirect('/dashboard');
  }
  return next()
}

//Authentication check. This is fetched when the user attempts to view protected webpages such as results etc.
router.get("/login/success", (req, res) => {
  if (req.user) {
    res.json({
      authenticated: true,
      message: "user has successfully authenticated",
      user: req.user,
      cookies: req.cookies
    });
  } else {
    res.json({
      authenticated: false,
      message: "user not authenticated"
    })
  }
  
});

// When user requests a logout, end session and redirect to login page
router.get("/logout", (req, res) => {
  req.logout();
  res.redirect('/login')
});

module.exports = router;