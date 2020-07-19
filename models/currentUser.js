// const Joi = require('joi')
const mongoose = require('mongoose')


const superAdmin = mongoose.model('superAdmin',new mongoose.Schema({

isTrue:Boolean

}));



exports.superAdmin = superAdmin;
