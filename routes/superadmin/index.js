const express = require("express");
const router = express.Router();
const { Booking } = require("../../models/booking");
const {superAdmin} = require('../../models/currentUser')
const superAdminController = require("../../controllers/superadmin");
const jwt = require('jsonwebtoken')
const verify = require('../../middlewares/verifyadmin')


router.get("/booking",verify, superAdminController.get_bookings);
router.post("/deleteVenue/:venueid", superAdminController.delete_Venue);
router.get("/getvenues", superAdminController.getVenues);
router.get("/vendors", superAdminController.get_vendors);
router.post("/deletevendor/:id", superAdminController.delete_vendor);
router.get("/requestedvenues", superAdminController.requested_venues);
router.post(
  "/approverequest/:id",
  superAdminController.approve_requested_venue
);
router.post("/deleterequest/:id", superAdminController.reject_requested_venue);
router.get("/getreferal", superAdminController.get_referals);
router.put("/approvereferal/:id", superAdminController.approve_referal);
router.post("/rejectreferal/:id", superAdminController.reject_referal);
router.post("/forwardbooking/:id", superAdminController.forward_booking);
router.post("/rejectbooking/:id", superAdminController.reject_booking);
router.post('/checkingpostrequest',(req,res)=>{
  res.send('its working')
})
router.post('/loginadmin',(req,res)=>{
  const email = req.body.email
  const password = req.body.password
  email == 'admin@planeve.com' && password == 'admin123' ? res.status(200).redirect('/superadmin/vendors') : res.status(400).send('invalid login')
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

router.get("/login", (req, res) => {
  res.render("superadmin/login");
});
router.post('/auth',async (req,res)=>{
  try{
  const email = req.body.email
  const password = req.body.password
  // if(email )if(ema)
  if(email != 'admin@planeve.com' || password != 'admin123')
  {
    res.send('invalid username and password')
  }
  let getAdmin = await superAdmin.findOne({isTrue:true})
  if(getAdmin)
  {
    getAdmin.isTrue = true
  await getAdmin.save() 
  res.redirect("booking")
  }
  else{
await superAdmin.remove()
const admin = new superAdmin({
    isTrue:true  
  })
  await admin.save()
  res.redirect("booking")

}
  
  
// }
// res.send(getAdmin)
}
  catch(error){
    res.send(error.message)
  }
  

})

// router.get("/referal", (req, res) => {
//   res.render("superadmin/referals");
// });
router.get("/booking", (req, res) => {
  res.render("superadmin/bookingrequests");
});
module.exports = router;
