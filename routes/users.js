var express = require('express');
var router = express.Router();

// link to the account model
var Account = require('../models/account');

// auth check
function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    next();
  }
  else {
    res.redirect('/login');
  }
}


/* GET users listing. */
router.get('/',isLoggedIn, function(req, res, next) {
  Account.find(function(err, Username) {
    if (err) {
      console.log(err);
      res.render('error');
    }
    else {
      // load the users page and pass the query result
      res.render('users', {
        title:"users page",
        users: Username,
        user: req.user
      });
    }
  });
});

module.exports = router;