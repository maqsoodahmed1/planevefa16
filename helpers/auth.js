module.exports = {
    ensureAuthenticated: function (req, res, next) {
        
        if (req.isAuthenticated()) {
            console.log('the user requested =>',req.user)
            return next();
        } else {
            req.flash('error_msg', 'Not Authorized');
            res.redirect('/');
        }
    }
};