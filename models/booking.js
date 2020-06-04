const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const joi = require('joi')
const bookingInfo = mongoose.model('Booking',new Schema({

    fullName:{
        type:String,
        required:true
    },
    emailAddress:{
        type:String,
        required:true
    }
    ,
    PhoneNumber:{
        type:String,
        required:true
    },
    eventType:{
        type:String,
        required:true
    },
    eventDate:{
        type:String,
        required:true
    },
    numberOfGuests:{
        type:Number,
        required:true
    },
    dateOfViewing:{
        type:String,
        required:true
    }
    ,
    bookedVenue:{
        type:Schema.Types.ObjectId,
        ref:'Venue'
    }
    ,request:{
        type:Boolean
    }
   
    ,status:{
        type:Boolean
    }
}));




validateSchema = (booking) =>{
    // joi.string().required()
    // fullName:,
    // emailAddress:,
    // PhoneNumber:,
    // eventType:,
    // eventDate:,
    // numberOfGuests:,
    // dateOfViewing:       

        const schema = {
            fullName:joi.string().required() ,
            emailAddress:joi.string().required().email(),
            PhoneNumber:joi.string().required(),
            eventType:joi.string().required(),
            eventDate:joi.string().required(),
            numberOfGuests:joi.number().required(),
            dateOfViewing: joi.string().required(),     
            bookedVenue:joi.string()
        }
            return joi.validate(booking,schema)
}


exports.Booking = bookingInfo;
exports.validateBooking = validateSchema;