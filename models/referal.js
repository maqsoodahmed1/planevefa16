const mongoose = require('mongoose')
const Schema = mongoose.Schema
const joi = require('joi')
const Referal = mongoose.model('Referal',Schema({


customerName:{
    type:String,
    required:true
},
customerEmail:{
    type:String,
    required:true
},
startDate:{
    type:String,
    required:true
}
,
endDate:{
    type:String,
    required:true
}
,
address:{
    type:String,
    required:true
}
,
city:{
    type:String,
    required:true
},
country:{
    type:String,
    required:true
},
postalCode:{
    type:Number,
    required:true
},
budget:{
    type:Number,
    required:true
},
numberOfGuests:{
    type:String,
    required:true
},
catering:{
    type:String,
    required:true
}
,
quries:{
    type:String,
    required:true
}
,
consideration:{
    type:String,
    required:true
}
,
createdUser:{
    type:Schema.Types.ObjectId,
    ref:'users'
},
status:{
    type:Number
}

}))



validateReferal = (referal) => {
    const schema = {
        customerName:joi.string().min(5).max(25).required(),
        customerEmail:joi.string().min(5).max(25).required(),
        startDate:joi.string().min(5).max(25).required(),
        endDate:joi.string().min(5).max(25).required(),
        address:joi.string().min(5).max(25).required(),
        city:joi.string().min(5).max(25).required(),
        country:joi.string().min(5).max(25).required(),
        postalCode:joi.number().required(),
        budget:joi.number().required(),
        numberOfGuests:joi.number().required(),
        catering:joi.string().min(5).max(25).required(),
        quries:joi.string().min(5).max(25).required(),
        consideration:joi.string().min(5).max(25).required()
    }
    return joi.validate(referal,schema)
}



exports.Referal = Referal;
exports.validate = validateReferal; 