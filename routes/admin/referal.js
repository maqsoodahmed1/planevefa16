const express = require('express');
const router = express.Router();
const {Referal,validate} = require('../../models/referal')
const User = require('../../models/User')
const {ensureAuthenticated} = require('../../helpers/auth')


router.post('/postreferal',ensureAuthenticated, async (req,res)=>{
    const {error} = validate(req.body)
    console.log(req.body)
    if(error) return res.status(400).send(error.details[0].message)
    let referal = new Referal({
customerName:req.body.customerName,
customerEmail:req.body.customerEmail,
startDate:req.body.startDate,
endDate:req.body.endDate,
address:req.body.address,
city:req.body.city,
country:req.body.country,
postalCode:req.body.postalCode,
budget:req.body.budget,
numberOfGuests:req.body.numberOfGuests,
catering:req.body.catering,
quries:req.body.quries,
consideration:req.body.consideration,
createdUser:req.user._id
})

referal =  await referal.save()
res.send(referal)

})








router.get('/getreferal',async(req,res)=>{
let referal = await Referal.findById('5e752f9b2182271ea0682bcd').populate('createdUser')
res.send(referal.createdUser.name)
})

module.exports = router