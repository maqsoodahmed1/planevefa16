const express = require('express');
const router = express.Router();
const {Booking} = require('../../models/booking')
const superAdminController = require('../../controllers/superadmin')


router.get('/',superAdminController.get_bookings)
// router.get('/bookinginfo',async(req,res)=>{
//     let booking = await Booking.find()
//     res.send(booking)
// })


module.exports = router;
