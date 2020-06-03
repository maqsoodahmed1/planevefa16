const express = require("express");
const router = express.Router();
const { Booking } = require("../../models/booking");
const superAdminController = require("../../controllers/superadmin");

router.get("/booking", superAdminController.get_bookings);
router.post("/deleteVenue/:venueid", superAdminController.delete_Venue);
router.get("/getvenues", superAdminController.getVenues);
router.get("/vendors", superAdminController.get_vendors);
router.post("/deletevendor/:id", superAdminController.delete_vendor);
router.get("/requestedvenues", superAdminController.requested_venues);
router.put("/approverequest/:id", superAdminController.approve_requested_venue);
router.put("/deleterequest/:id", superAdminController.reject_requested_venue);
router.get("/getreferal", superAdminController.get_referals);
router.put("/approvereferal/:id", superAdminController.approve_referal);
router.post("/rejectreferal/:id", superAdminController.reject_referal);
router.post("/forwardbooking/:id", superAdminController.forward_booking);
router.post("/rejectbooking/:id", superAdminController.reject_booking);
router.post('/checkingpostrequest',(req,res)=>{
  res.send('its working')
})

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
// router.get("/referal", (req, res) => {
//   res.render("superadmin/referals");
// });
router.get("/booking", (req, res) => {
  res.render("superadmin/bookingrequests");
});
module.exports = router;
