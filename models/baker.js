// require mongoose 
const mongoose = require('mongoose')
// creating shorthand for the Schema constructor 
const { Schema } = mongoose 

// schema
const bakerSchema = new Schema({
    name: {
        type: String,
        required: true,
        enum: ['Mikey', 'Gerard', "Frankie", "Ray", "Pete", "Patrick"]
    },
    startDate: {
        type: Date,
        required: true},
    bio: {
        type: String
}})


// model and export 
const Baker = mongoose.model('Baker', bakerSchema)
module.exports = Baker


