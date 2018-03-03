const express = require('express');
const keys = require('./config/keys.js');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const app = express();

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: 'http://localhost:3000/auth/google/callback'
    },
    function(accessToken, refreshToken, profile, done) {
      console.log('accessToken', accessToken);
      console.log('refreshToken', refreshToken);
      console.log('profile', profile);
    }
  )
);

app.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

app.get('/auth/google/callback', passport.authenticate('google', { failureRedirect: '/login' }), function(req, res) {
  // Successful authentication, redirect home.
  res.redirect('/');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT);
