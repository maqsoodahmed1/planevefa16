const express = require("express");
const router = express.Router();
const { Booking } = require("../models/booking");
const { venueSchema } = require("../models/venueinfo");
const { Referal } = require("../models/referal");
const mongoose = require("mongoose");
require("../models/User");
const User = mongoose.model("users");


exports.get_vendors = async (req, res) => {
  let vendors = await User.find().populate("createdVenues");
  if (!vendors) return res.status(400).send("No vendors found");
  res.status(200).render("/superadmin/index", {
    vendors,
  });
};

exports.delete_vendor = async (req, res) => {
  try {
    let vendor = await User.findById(req.params.id);
    vendor.status = false;
    vendor.save();
    res.status(200).send("Vendor Deleted");
  } catch (error) {
    res.status(400).send(error.message);
  }
};

exports.requested_venues = async (req, res) => {
  try {
    let requestedVenues = await venueSchema.find({ status: 1 });
    if (!requestedVenues) return res.status(200).send("No requests");
    res.status(200).render("/superadmin/index", {
      requestedVenues: requestedVenues,
    });
  } catch (error) {
    res.status(200).send(error.message);
  }
};

exports.approve_requested_venue = async (req, res) => {
  try {
    let requestedVenue = await venueSchema.findById(req.params.id);
    requestedVenue.status = 2;
    requestedVenue.save();
    res.status(200).render("/superadmin/index");
  } catch (error) {
    res.status(400).send(error.message);
  }
};

exports.reject_requested_venue = async (req, res) => {
  try {
    let requestedVenue = await venueSchema.findById(req.params.id);
    requestedVenue.status = 3;
    requestedVenue.save();
    res.status(200).render("/superadmin/index");
  } catch (error) {
    res.status(400).send(error.message);
  }
};

exports.get_referals = async (req, res) => {
  try {
    let referals = await Referal.find();
    if (!referals) return res.status(400).send("No referals Found");
    res.status(200).render("/superadmin/index", {
      referals,
    });
  } catch (error) {
      res.status(200).send(error.message)
  }
};

exports.approve_referal = async(req,res)=>{
    try {
        let referal = await Referal.findById(req.params.id)
        referal.status = 2
        referal.save()
        res.status(200).render("/superadmin/index")
    } catch (error) {
        res.status(400).send(error.message)
    }
}

exports.reject_referal = async(req,res)=>{
    try {
        let referal = await Referal.findById(req.params.id)
        referal.status = 3
        referal.save()
        res.status(200).render("/superadmin/index")
    } catch (error) {
        res.status(400).send(error.message)
    }
}

exports.rejectRequest = async (req, res) => {
  let venue = await venueSchema.findById(req.params.venueid);
  venue.status = false;
  await venue.save();
  // res.render('superadmin/index')
  res.send(venue);
};

exports.get_bookings = async (req, res) => {
    let booking = await Booking.find({ status: true }).populate("bookedVenue");
    let referals = await Referal.find();
    let venues = await venueSchema.find();
  
    res.render("superadmin/index", {
      bookings: booking,
      referals,
      venues,
    });
  };

exports.forward_booking = async(req,res)=>{
    let booking = await Booking.findById(req.params.id)
    let bookedVenue = booking.bookedVenue
    let Venue =await venueSchema.findById(bookedVenue)
    Venue.approvedBooking.push(booking)
    Venue.save()
    res.status(200).send(Venue)
}

exports.reject_booking = async(req,res)=>{
    let booking = await Booking.findById(req.params.id)
    booking.status = false
    booking.save()
    res.send(booking)
}

exports.getVenues = async (req, res) => {
  let venues = await venueSchema.find();
  res.send(venues);
};
