const express = require('express');
const router = express.Router();
const {Booking,validateBooking} = require('../models/booking')
const _ = require('lodash')
const {venueSchema} = require('../models/venueinfo')
const nodemailer = require('nodemailer')
// require('../models/User');



router.get('/bookingvenue/:id',async(req,res)=>{
    
    const venue = await venueSchema.findById(req.params.id)

    res.render('venues/bookvenue',{
        venue:venue,
        message:req.flash('message')
    })
})



router.post('/booking',async(req,res)=>{
    
    const {error} = validateBooking(req.body)
    if(error) return res.status(400).send(error.details[0].message)
    const booking = new Booking(
        _.pick(req.body,["bookedVenue","dateOfViewing","fullName","emailAddress","PhoneNumber","eventType","eventDate","numberOfGuests"])
    )

 

       
let transporter = nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:'maqsooddbaloch@gmail.com',
        pass:'benellitnt150'
    }

})


let mailOptions = {
    from:'maqsooddbaloch@gmail.com',
    to:req.body.emailAddress,
    subject:'Booking Information',
    text:`We have recieved your query for booking we will contact you soon. your booking id = ${booking._id}`
}


transporter.sendMail (mailOptions,async function(err,data){
    if(err)
    {
        res.send(err)
    }
    else{
        const venue = await venueSchema.findById(booking.bookedVenue)
        venue.bookings.push(booking._id)
       
        await venue.save()
        booking.save()
        // res.send(`booking = ${booking} 
        //     and venue id = ${venue.bookings}
        // `)
        req.flash('message',"successfully updated")
        res.redirect(`/booking/bookingvenue/${req.body.bookedVenue}`)
    }
})


    
  })
 

module.exports = router;
