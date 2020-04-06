const express = require('express');
const router = express.Router();
const {Booking} = require('../models/booking')
const {venueSchema} = require('../models/venueinfo')
const {Referal} = require('../models/referal')


exports.get_bookings = async (req,res)=>{    

    let booking = await Booking.find().populate('bookedVenue')
    let referals = await Referal.find()
    let venues = await venueSchema.find()

    res.render('superadmin/index',{
        bookings:booking,
        referals,
        venues
    })
}


