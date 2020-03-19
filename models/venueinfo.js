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
    venueAddress:{
        type:String
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
}));




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
            venueDescription:joi.string().min(5).max(25).required(),
            numberOfPeople:joi.string().min(5).max(25).required(),
            image:joi.string().min(5).required(),

    }

            return joi.validate(schema)
}


exports.venueSchema = venueInfo;
exports.validateVenue = validateSchema;