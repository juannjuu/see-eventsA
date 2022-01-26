const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

// Import user model
const { User } = require('../models');

passport.use(
  'google',
  new GoogleStrategy(
    {
      clientID:
        '813013001535-go98i51vjavi72lrbr0oih3ciqmmrep0.apps.googleusercontent.com',
      clientSecret: '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',
      callbackURL: 'https://www.rakyat.xyz/api/v1/auth/google/callback',
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
