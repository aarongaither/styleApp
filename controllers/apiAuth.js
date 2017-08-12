const db = require("../models");
const router = require('express').Router();
const passport = require('passport');

router.post('/login', passport.authenticate('login', {
	successRedirect: '/',
	failureRedirect: '/'
}));

router.get('/signout', (req, res) => {
  req.logout();
  res.redirect('/');
});

router.post('/new', (req, res) => {
	db.User.create(req.body)
});

router.put('/update', (req, res) => {
	db.User.update(req.body, {
		where: {
			id: req.body.id
		}
	})
})

router.get('/check', (req, res) => {
	if (req.user) {
		res.json(req.user.username);
	} else {
		res.end();
	}
})

module.exports = router;