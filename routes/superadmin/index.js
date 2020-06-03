const express = require("express");
const router = express.Router();
const { Booking } = require("../../models/booking");
const superAdminController = require("../../controllers/superadmin");

router.get("/", superAdminController.get_bookings);
router.post("/rejectrequest/:venueid", superAdminController.rejectRequest);
router.get("/getvenues", superAdminController.getVenues);
router.get("/vendors", superAdminController.get_vendors);
router.put("/deletevendor/:id", superAdminController.delete_vendor);
router.get("/requestedvenues", superAdminController.requested_venues);
router.put("/approverequest/:id", superAdminController.approve_requested_venue);
router.put("/deleterequest/:id", superAdminController.reject_requested_venue);
router.put("/getreferal", superAdminController.get_referals);
router.put("/approvereferal/:id", superAdminController.approve_referal);
router.put("/rejectreferal/:id", superAdminController.reject_referal);
router.put("/forwardbooking/:id", superAdminController.forward_booking);

// superadming routing
router.get("/vendor", (req, res) => {
  res.render("superadmin/vendors");
});

router.get("/requests", (req, res) => {
  res.render("superadmin/venuerequests");
});
router.get("/venues", (req, res) => {
  res.render("superadmin/allvenues");
});
router.get("/referal", (req, res) => {
  res.render("superadmin/referals");
});
router.get("/booking", (req, res) => {
  res.render("superadmin/bookingrequests");
});
module.exports = router;
