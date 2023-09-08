// require mongoose 
const mongoose = require('mongoose')
// creating shorthand for the Schema constructor 
const { Schema } = mongoose
const requiredBread = require('./bread.js')

// schema
const bakerSchema = new Schema({
    name: {
        type: String,
        required: true,
        enum: ['Mikey', 'Gerard', "Frankie", "Ray", "Pete", "Patrick"]
    },
    startDate: {
        type: Date,
        required: true
    },
    bio: String,
},
{toJSON: {virtuals: true}})

// Virtuals
bakerSchema.virtual('breads', {
    ref: 'Bread',
    localField: '_id',
    foreignField: 'baker'
})

// hooks 
bakerSchema.post('findOneAndDelete', function() {
    Bread.deleteMany({ baker: this._conditions._id })
        .then(deleteStatus => {
            console.log(deleteStatus)
        })
  })            


// model and export 
const Baker = mongoose.model('Baker', bakerSchema)
module.exports = Baker


