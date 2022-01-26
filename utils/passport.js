const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const FacebookStrategy = require ('passport-facebook').Strategy;

// Import user model
const { User } = require('../models');

passport.use(
  'google',
  new GoogleStrategy(
    {
      clientID:
        '813013001535-go98i51vjavi72lrbr0oih3ciqmmrep0.apps.googleusercontent.com',
      clientSecret: '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',
      callbackURL: 'https://see-events-teama.herokuapp.com/api/v1/auth/google/callback',
    },
    async function (accessToken, refreshToken, profile, cb) {
      // Find email or create it
      const [findUser, created] = await User.findOrCreate({
          where: { email: profile.emails[0].value },
          defaults: { 
              firstName: profile.name.givenName,
              lastName: profile.name.familyName,
              password: "tampan",
            },
        });

      // null is no error, findUser => req.user
      cb(null, findUser);
    }
  )
);

passport.serializeUser(function(user,done){  done(null,user)})

passport.deserializeUser(function(user,done){  done(null,user)})
passport.use(new FacebookStrategy(
  {
  clientID: '472864677824097',
  clientSecret: "d16766317ffcfcb5660d8c4a1d0d9182",
  callbackURL: 'https://see-events-teama.herokuapp.com/api/v1/auth/facebook/callback',
  
  },
  (accessToken,refreshToken,profile,cb)=>{
    cb(null,profile)
  }
)
)

module.exports = passport
