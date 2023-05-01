var express = require('express');

var cookieParser = require('cookie-parser');
var crypto = require('crypto');
var logger = require('morgan');
var path = require('path');
var session = require('express-session');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'spa', 'static')));

app.use(
    session(
        {
            secret: crypto.randomBytes(20).toString('hex'),
            resave: false,
            saveUninitialized: true
        }
    )
);

const isAuthenticated = (req, res, next) => {
    if (req.session.user) next()
    else next('route')
}

app.post('/login', express.urlencoded({ extended: false }), function (req, res) {
    // login logic to validate req.body.user and req.body.pass
    // would be implemented here. for this example any combo works

    if (req.body.user !== 'username' || req.body.pass !== 'password') {
        return res.redirect('/')
    }
  
    // regenerate the session, which is good practice to help
    // guard against forms of session fixation
    req.session.regenerate(function (err) {
      if (err) next(err)
  
      // store user information in session, typically a user id
      req.session.user = req.body.user
  
      // save the session before redirection to ensure page
      // load does not happen before session is saved
      req.session.save(function (err) {
        if (err) return next(err)
        res.redirect('/')
      })
    })
})
  
app.get('/logout', function (req, res, next) {
    // logout logic
  
    // clear the user from the session object and save.
    // this will ensure that re-using the old session id
    // does not have a logged in user
    req.session.user = null
    req.session.save(function (err) {
      if (err) next(err)
  
      // regenerate the session, which is good practice to help
      // guard against forms of session fixation
      req.session.regenerate(function (err) {
        if (err) next(err)
        res.redirect('/')
      })
    })
})

app.get("/*", isAuthenticated, (req, res) => {
    res.sendFile(path.resolve("spa", "index.html"));
});

app.get('/*', function (req, res) {
    res.sendFile(path.resolve("spa", "login.html"));
})
  
module.exports = app;
