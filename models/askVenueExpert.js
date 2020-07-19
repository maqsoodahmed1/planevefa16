// const Joi = require('joi')
const mongoose = require('mongoose');
const { strict } = require('joi');


const askVenueExpert = mongoose.model('askVenueExpert',new mongoose.Schema({
 occasionType:{
     type:String
 },
 location:{
     type:String
 },
 venueStyle:{
     type:String
 },
 estimatedBudget:{
     type:String
 },
 numberOfPeople:{
     type:String
 },
 eventDate:{
     type:String
 },
 fullName:{type:String},
 phoneNumber:{type:Number},
 emailAddress:{type:String},

}));



exports.askVenueExpert = askVenueExpert ;
