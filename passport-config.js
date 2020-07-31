const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');

//The following is used to establish a local strategy for passport, which is used for 
//authenticating user logins using locally stored hashed passwords
function initialize(passport, getUserByEmail, getUserById) {
  const authenticateUser = async (email, password, done) => {
    const user = await getUserByEmail(email); //we must await here as queries to our SQL database with db.get() is asynchronous.
    if (user == null) {
      console.log('No user with that email')
      return done(null, false, { message: 'No user with that email' });
    }

    //If a user is found in the database, compare encrypted stored password with password provided
    try {
      if (await bcrypt.compare(password, user.password)) {
        return done(null, user);
      } else {
        console.log('Password incorrect')
        return done(null, false, { message: 'Password incorrect'}); 
      }
    } catch (err) {
      return done(err);
    }
  }

  passport.use(new LocalStrategy({ usernameField: 'email'}, 
  authenticateUser));
  passport.serializeUser((user, done) => done(null, user.id) );
  passport.deserializeUser( async (id, done) => { 
    done(null, await getUserById(id)) //again we must await a query to the database, this time while searching by id.
  });
}


module.exports = initialize;