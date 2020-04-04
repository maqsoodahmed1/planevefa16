const express = require('express');
const router = express.Router();


  router.post('/checkdata',async(req,res)=>{

    req.body.canbringfood ? req.body.canbringfood=true : req.body.canbringfood=false
   res.send(req.body.canbringfood)


    
  })


module.exports = router;