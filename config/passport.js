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

// Exporting our configured passport
module.exports = passport;
