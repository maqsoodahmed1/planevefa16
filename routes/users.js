const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const passport = require('passport');

// Load User Model
require('../models/User');
const User = mongoose.model('users');

// User Login Route
router.get('/login', (req, res) => {
    res.render('users/login');
});

// User Register Route
router.get('/register', (req, res) => {
    res.render('users/register');
});

// Login Form POST
router.post('/login', (req, res, next) => {
    // console.log('the user =>',req.user)
    passport.authenticate('local', {
        successRedirect: '/admin/sample',
        failureRedirect: '/',
        
        // successMessage:'success',
        // failureMessage:'failed',
        failureFlash: true
    }
    
    )(req, res, next);
});

// Register Form POST
router.post('/register', (req, res) => {
    let errors = [];

    if (req.body.password != req.body.password2) {
        errors.push({ text: 'Passwords do not match!' });
    }

    if (req.body.password.length < 4) {
        errors.push({ text: 'Passwords must be at least 4 characters!' });
    }

     else {
        User.findOne({email: req.body.email})
            .then(user => {
                if (user) {
                    req.flash('error_msg', 'Email already registered!');
                    res.redirect('/');
                } else {
                    const newUser = new User({
                        name: req.body.name,
                        email: req.body.email,
                        password: req.body.password,
                        createdVenues:[]
                    });

                    bcrypt.genSalt(10, (err, salt) => {
                        bcrypt.hash(newUser.password, salt, (err, hash) => {
                            if (err) throw err;
                            newUser.password = hash;
                            newUser.save()
                                .then(user => {
                                    req.flash('success_msg', 'You are now registered and can log in');
                                    res.redirect('/');
                                })
                                .catch(err => console.error(err));
                        });
                    });
                }
            })
            .catch(err => console.error(err));
    }
});

// Logout User
router.get('/logout', (req, res) => {
   req.logout();
   req.flash('success_msg', 'You are logged out');
   res.redirect('/');
});

module.exports = router;