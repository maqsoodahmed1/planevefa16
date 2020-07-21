const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const joi = require('joi')
const venueInfo = mongoose.model('Venue',new Schema({


    venueName:{

        type:String
    },
    numberOfPeople:{
        type:String
    },
    image:{
        type:String
    },
    venueGallery:{
        type:Array
    },
    venueAddress2:{
        type:String
    },
    venueCity:{
        type:String
    },
    venueCountry:{
        type:String
    },
    venueNearest:{
        type:String
    },
    venueNeighborhood:{
        type:String
    },
    venuePostCode:{
        type:String
    },
    venueDescription:{
        type:String
    },
    venueType:{
        type:String
    }
    ,
    createdUser:{
        type:Schema.Types.ObjectId,
        ref:"users"
    },
    features:{
      type:Array  
    }
    ,
    allowedEvents:{
        type:Array
    }
    ,bookings:[
        {
        type:Schema.Types.ObjectId,
        ref:"Booking"
        }
    ],
    approvedBooking:[
        {
            type:Schema.Types.ObjectId,
            ref:"Booking"
        }
    ],
    status:{
        type:Number
    }
}
,{
    usePushEach:true
}
));




validateSchema = (venue) =>{
        const schema = {
            venueName:joi.string().min(5).max(25).required(),
            venueAddress:joi.string().min(5).max(25).required(),
            venueAddress2:joi.string().min(5).max(25).required(),
            venueCountry:joi.string().min(5).max(25).required(),
            venueNearest:joi.string().min(5).max(25).required(),
            venuePostCode:joi.string().min(5).max(25).required(),
            venueNeighborhood:joi.string().min(5).max(25).required(),
            venueType:joi.string().min(5).max(25).required(),
            venueCity:joi.string().min(5).max(25).required(),
            venueDescription:joi.string().min(5).max(250).required(),
            numberOfPeople:joi.string().min(5).max(25).required(),
            image:joi.string().min(5).required(),


    }

            return joi.validate(venue,schema)
}


exports.venueSchema = venueInfo;
exports.validateVenue = validateSchema;