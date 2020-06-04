const express = require('express');
const router = express.Router();
const {upload} = require('../routes/upload')
const {venueSchema,validateVenue} = require('../models/venueinfo')
const mongoose = require('mongoose')
require('../models/User');
const User = mongoose.model('users');


exports.body_search = async (req, res) => {
  
    try {
      const city =  req.body.venueCity
      const type  = req.body.venueType
      const country = req.body.venueCountry
  
    let venues = await venueSchema.find({"venueCity":city,"venueType":type,"venueCountry":country})
    console.log(req.body,venues)
    res.render('venues/venues',{
      venues:venues
    }) 
    } catch (error) {
     res.send(error.message) 
    }
  }

  exports.get_all_venues = async (req, res) => {
    //  let users = await User.findById(req.user._id).populate('createdVenues')
    let venues = await venueSchema.find()
    res.render('venues/venues',{
      venues:venues
    })
}

exports.get_single_venue = async(req,res)=>{
  let bookedDates = []
    let venues = await venueSchema.findById(req.params.id).populate('bookings')
    venues.bookings.forEach(data=>{
     bookedDates.push(data.dateOfViewing)
    })
    // console.log('bookedEvents => ',bookedDates)
    // res.send(venues.bookings)
   res.render('venues/onevenue',{
     venues:venues,
     bookedDates
   })
 }

exports.get_venue_by_city = async(req,res)=>{
    let venues = await venueSchema.find({"venueCity":req.params.city})
    res.render('venues/venues',{
        venues
    })
  }

exports.get_venue_by_category = async(req,res)=>{
    let venues = await venueSchema.find({"venueType":req.params.category})
    res.render('venues/venues',{
        venues
    })
}


 exports.update_venue = async(req,res)=>{
    let updateVenue = await venueSchema.findById(req.params.id)
              updateVenue.venueName = req.body.venuename
              updateVenue.venueType = req.body.venuetype
              updateVenue.venueAddress = req.body.venueaddress
              updateVenue.numberOfPeople = req.body.venuenumber
              updateVenue.venueAddress2 = req.body.venueaddress2
              updateVenue.venueNeighborhood = req.body.venueneighborhood
              updateVenue.venueCountry = req.body.venuecountry
              updateVenue.venueCity = req.body.venuecity
              updateVenue.venuePostCode = req.body.venuepostcode
              updateVenue.venueNearest = req.body.venuenearest
              updateVenue.venueDescription = req.body.venuedescription
  

             await updateVenue.save()
             res.send(updateVenue)
     
  }


  exports.delete_venue = async(req,res)=>{
    let deleteVenue = await venueSchema.findById(req.params.id)
    deleteVenue.remove()
    res.send('Venue deleted')
  
  }


  exports.add_venue = (req, res) => {upload(req, res, (err) =>  {
    if(err){
        console.log(err)
    } else {
      if(req.file == undefined){
         res.send('image uploaded is not correct')      
      } else {   
       
             
         const file =  `uploads/${req.file.filename}`
         const validateschema = {
          venueName:req.body.venuename,
          venueType:req.body.venuetype,
          numberOfPeople:req.body.venuenumber,
          venueAddress:req.body.venueaddress,
          venueAddress2:req.body.venueaddress2,
          venueNeighborhood:req.body.venueneighborhood,
          venueCountry:req.body.venuecountry,
          venueCity:req.body.venuecity,
          venuePostCode:req.body.venuepostcode,
          venueNearest:req.body.venuenearest,
          venueDescription:req.body.venuedescription,
         image:file            
         // req.body,file
        }
         
         const {error} = validateVenue(validateschema)
           if(error) return res.status(400).send(error.details[0].message)
             const features = []
  const allowedEvents = []
  req.body.wifi ? features.push("wifi") : req.body.wifi=false
  req.body.airCondition ? features.push("Centralized AirCondition") : req.body.airCondition=false
  req.body.stage ? features.push("Stage") : req.body.stage=false
  req.body.screening ? features.push("Screening") : req.body.screening=false
  req.body.stageDecoration ? features.push("Stage Decoration") : req.body.stageDecoration=false
  req.body.highSecurity ? features.push("High Security") : req.body.highSecurity=false
  req.body.groomPhotographyArea ? features.push("Rooms") : req.body.groomPhotographyArea=false
  req.body.easyCentralLocation ? features.push("Groom/Briddle Photography Area") : req.body.easyCentralLocation=false
  req.body.separateSpace ? features.push("Easy Central Location") : req.body.separateSpace=false
  req.body.canBringOwnCarterers ? features.push("can bring their own carterers") : req.body.canBringOwnCarterers=false
 
 //allowed events
  req.body.artExhibitions ? allowedEvents.push("Art Exhibitions") : req.body.artExhibitions=false
  req.body.popups ? allowedEvents.push("Pop-Ups") : req.body.popups=false
  req.body.promoters ? allowedEvents.push("Promoters") : req.body.promoters=false
  req.body.ticketedEvents ? allowedEvents.push("Ticketed events") : req.body.ticketedEvents=false
  req.body.amplifiedEvents ? allowedEvents.push("Amplified Events") : req.body.amplifiedEvents=false
  req.body.ownMusic ? allowedEvents.push("Own Music") : req.body.ownMusic=false
  req.body.birthdayParties ? allowedEvents.push("Birthday Parties") : req.body.birthdayParties=false 
  req.body.weddings ? allowedEvents.push("Weddings") : req.body.weddings=false
  

        const venue = new venueSchema ({
            venueName:req.body.venuename,
           venueType:req.body.venuetype,
           numberOfPeople:req.body.venuenumber,
           venueAddress:req.body.venueaddress,
           venueAddress2:req.body.venueaddress2,
           venueNeighborhood:req.body.venueneighborhood,
           venueCountry:req.body.venuecountry,
           venueCity:req.body.venuecity,
           venuePostCode:req.body.venuepostcode,
          venueNearest:req.body.venuenearest,
          venueDescription:req.body.venuedescription,
          createdUser:req.user._id,
          image:file,
          features,
          allowedEvents,
          status:false
        })
        const userid = req.user._id
       

        async function savedata(){
          try {
            let user = await User.findById(userid)
            user.createdVenues.push(venue)
            await user.save()
            await venue.save()
            console.log(user)
            res.send(venue)

           
          } catch (error) {
            console.log(error.message)
          }
        }

        savedata()

          
        }
      
    }
  });
  
  }