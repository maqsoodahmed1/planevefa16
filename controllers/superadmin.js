const express = require("express");
const router = express.Router();
const { Booking } = require("../models/booking");
const { venueSchema } = require("../models/venueinfo");
const { Referal } = require("../models/referal");
const mongoose = require("mongoose");
require("../models/User");
const User = mongoose.model("users");

exports.get_vendors = async (req, res) => {
  let vendors = await User.find({status:true}).populate("createdVenues");
  if (!vendors) return res.status(400).send("No vendors found");
  res.status(200).render("superadmin/vendors", {
    vendors,
  });
};

exports.delete_vendor = async (req, res) => {
  try {
    let vendor = await User.findById(req.params.id);
    vendor.status = false;
    vendor.save();
    res.status(200).redirect("/superadmin/vendors")
  } catch (error) {
    res.status(400).send(error.message);
  }
};

exports.requested_venues = async (req, res) => {
  try {
    let requestedVenues = await venueSchema.find({ status: 1 });
    if (!requestedVenues) return res.status(200).send("No requests");
    res.status(200).render("superadmin/venuerequests", {
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
    res.status(200).redirect("/superadmin/requestedvenues");
  } catch (error) {
    res.status(400).send(error.message);
  }
};

exports.reject_requested_venue = async (req, res) => {
  try {
    let requestedVenue = await venueSchema.findById(req.params.id);
    requestedVenue.status = 3;
    requestedVenue.save();
    res.status(200).redirect("/superadmin/requestedvenues");
  } catch (error) {
    res.status(400).send(error.message);
  }
};

exports.get_referals = async (req, res) => {
  try {
    let referals = await Referal.find({status:1});
    if (!referals) return res.status(400).send("No referals Found");
    res.status(200).render("superadmin/referals", {
      referals,
    });
  } catch (error) {
    res.status(200).send(error.message);
  }
};

exports.approve_referal = async (req, res) => {
  try {
    let referal = await Referal.findById(req.params.id);
    referal.status = 2;
    referal.save();
    res.status(200).redirect("/superadmin/index");
  } catch (error) {
    res.status(400).send(error.message);
  }
};

exports.reject_referal = async (req, res) => {
  try {
    let referal = await Referal.findById(req.params.id);
    referal.status = 3;
    referal.save();
    res.status(200).redirect("/superadmin/getreferal");
  } catch (error) {
    res.status(400).send(error.message);
  }
};

exports.delete_Venue = async (req, res) => {
  let venue = await venueSchema.findById(req.params.venueid);
  venue.status = 3;
  await venue.save();
  res.redirect('/superadmin/getvenues')
};

exports.get_bookings = async (req, res) => {
  let booking = await Booking.find({ request: true }).populate("bookedVenue");
  let referals = await Referal.find();
  let venues = await venueSchema.find();

  res.render("superadmin/bookingrequests", {
    bookings: booking,
    // referals,
    // venues,
  });
};


exports.forward_booking = async (req, res) => {
  let bookings = await Booking.find({ status: true }).populate("bookedVenue");

  let booking = await Booking.findById(req.params.id);
  let bookedVenue = booking.bookedVenue;
  let Venue = await venueSchema.findById(bookedVenue);
  let approvedBooking = Venue.approvedBooking
  booking.request = false;
  booking.status = true;
  booking.save()
  Venue.approvedBooking.push(booking._id);
  Venue.save();
  res.redirect('/superadmin/booking')
};

exports.reject_booking = async (req, res) => {
  let booking = await Booking.findById(req.params.id);
  booking.status = false;
  booking.request = false;
  booking.save();
  res.redirect('/superadmin/booking')
};

exports.getVenues = async (req, res) => {
  let venues = await venueSchema.find({status:2});
  res.render("superadmin/allvenues", {
    requestedVenues: venues,
  });
};
