const jwt = require('jsonwebtoken')
const {superAdmin} = require('../models/currentUser')

module.exports = async function (req,res,next){
    //   const Token = req.header('auth-token')
    //   
    //   console.log('the auth token requested  => ',req.headers.auth-token)

    //   if(!Token) return res.status(401).send('Access Denied')

      const key = 'secret'
    //   try {
         const verifyUser =  await  superAdmin.find({isTrue:true})
         console.log('the superAdmin',verifyUser.length)

         if(verifyUser.length>0)
         {next()}
         else
         {
             res.send('invalid')
         }
        //   : next() ? res.send('invalid')
         
          
    //   } catch (error) {
        //   res.status(400).send('Invalid Token')
    //   }

}


