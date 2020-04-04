var express = require('express');
var router    = express.Router();
var mongoose  = require('mongoose');




router.get('/', (req, res) => {

    res.render('admin/venues');
});

router.get('/sample', (req, res) => {
    res.render('admin/sample');
});
router.get('/enquiries', (req, res) => {
    res.render('admin/enquiries');
});
router.get('/referals', (req, res) => {
    res.render('admin/referals');
});




module.exports = router;