const express = require("express");
const router = express.Router();
const { upload } = require("../routes/upload");
const { venueSchema, validateVenue } = require("../models/venueinfo");
const mongoose = require("mongoose");
require("../models/User");
const User = mongoose.model("users");
const { ensureAuthenticated } = require("../helpers/auth");
const venueController = require("../controllers/venues");
const {askVenueExpert} = require('../models/askVenueExpert')
const nodemailer = require('nodemailer')



router.post("/bodysearch", venueController.body_search);
router.get("/", venueController.get_all_venues);
router.get("/askvenue", (req, res) => {
  res.render("venues/askvenue");
});
router.get("/:id", venueController.get_single_venue);
router.put("/:id", venueController.update_venue);
router.delete("/:id", venueController.delete_venue);
router.post("/upload", venueController.add_venue);
router.get("/city/:city", venueController.get_venue_by_city);
router.get("/category/:category", venueController.get_venue_by_category);

router.post('/askvenueexpert', async(req,res)=>{

let occasion = req.body.eventType
let location = req.body.location
let venueStyle = req.body.venueStyle
let estimatedBudget = req.body.budget
let date = req.body.dateTime
let fullName = req.body.fullName
let phoneNumber = req.body.phoneNumber
let emailAddress = req.body.emailAddress 
let numberOfPeople = req.body.people

const askVenue = new askVenueExpert({
  occasionType:occasion,
  location:location,
  venueStyle:venueStyle,
  estimatedBudget:estimatedBudget,
  numberOfPeople:numberOfPeople,
  eventDate:date,
  fullName:fullName,
  phoneNumber:phoneNumber,
  emailAddress:emailAddress
})

let transporter = nodemailer.createTransport({
  service:'gmail',
  auth:{
      user:'maqsooddbaloch@gmail.com',
      pass:'benellitnt150i'
  }

})


let mailOptions = {
  from:'maqsooddbaloch@gmail.com',
  to:'maqsooddbaloch@gmail.com',
  subject:'Ask',
  text:`The query for ask a venue 
  name = ${fullName}
  occasion type = ${occasion}
  location = ${location}
  venue style = ${venueStyle}
  estimated budget = ${estimatedBudget}
  number of people = ${numberOfPeople}
  email address = ${emailAddress}  
  event Date = ${date}
  `
}


transporter.sendMail (mailOptions,async function(err,data){
  if(err)
  {
      res.send(err)
  }
  else{
   
    await askVenue.save()
      req.flash('message',"successfully updated")
      res.redirect(`askvenue`)
  }
})







})

module.exports = router;
