const passport = require("passport");
const User = require("../models/User");
const LocalStrategy = require("passport-local").Strategy;
const passportJwt = require("passport-jwt");

const ExtractJwt  = passportJwt.ExtractJwt;
const JWTStrategy = passportJwt.Strategy;

passport.use(
  new LocalStrategy((username, password, done) => {
      User.findOne({username:username}, (error, user) => {
          if (error) return done(error);
          if (!user) {
              return done(null, false, {message: "No matching username."})
          } 
          user.login(password)
          .then(() => done(null, user))
          .catch(error => done(error, false, {message: "Password incorrect!"}))
      })
  })
)

passport.use(
  new JWTStrategy(
      {
          secretOrKey: "jwt_secret",
          jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
      }, 
      (jwtPayload, done) => {
          User.findById(jwtPayload.id)
          .then(user => done(null, user))
          .catch(error => done(error, false, {message: "Invalid token"}))
      }
  )
)

// // Telling passport we want to use a Local Strategy. In other words, we want login with a username/email and password
// passport.use(
//   new LocalStrategy(
//     // Our user will sign in using an email, rather than a "username"
//     {
//       usernameField: "email"
//     },
//     (email, password, done) => {
//       // When a user tries to sign in this code runs
//       db.User.findOne({
//         where: {
//           email: email
//         }
//       }).then(dbUser => {
//         // If there's no user with the given email
//         if (!dbUser) {
//           return done(null, false, {
//             message: "Incorrect email."
//           });
//         }
//         // If there is a user with the given email, but the password the user gives us is incorrect
//         else if (!dbUser.validPassword(password)) {
//           return done(null, false, {
//             message: "Incorrect password."
//           });
//         }
//         // If none of the above, return the user
//         return done(null, dbUser);
//       });
//     }
//   )
// );

// // In order to help keep authentication state across HTTP requests,
// // Sequelize needs to serialize and deserialize the user
// // Just consider this part boilerplate needed to make it all work
// passport.serializeUser((user, cb) => {
//   cb(null, user);
// });

// passport.deserializeUser((obj, cb) => {
//   cb(null, obj);
// });

// Exporting our configured passport
module.exports = passport;
