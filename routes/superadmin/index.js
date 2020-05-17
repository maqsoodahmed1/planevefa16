const express = require('express');
const router = express.Router();
const {Booking} = require('../../models/booking')
const superAdminController = require('../../controllers/superadmin')


router.get('/',superAdminController.get_bookings)
router.post('/rejectrequest/:venueid',superAdminController.rejectRequest)
router.get('/getvenues',superAdminController.getVenues)
router.get('/vendors',superAdminController.get_vendors)
router.put('/deletevendor/:id',superAdminController.delete_vendor)
router.get('/requestedvenues',superAdminController.requested_venues)
router.put('/approverequest/:id',superAdminController.approve_requested_venue)
router.put('/deleterequest/:id',superAdminController.reject_requested_venue)
router.put('/getreferal',superAdminController.get_referals)
router.put('/approvereferal/:id',superAdminController.approve_referal)
router.put('/rejectreferal/:id',superAdminController.reject_referal)
router.put('/forwardbooking/:id',superAdminController.forward_booking)

module.exports = router;
