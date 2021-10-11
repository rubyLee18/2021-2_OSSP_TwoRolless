const mongoose = require('mongoose')

const { Schema } = mongoose
const { Types: { ObjectId } } = Schema
const placeSchema = new Schema({
    // No: {
    //     type: ObjectId,
    //     required: true,
    //     unique: true,
    // },

    // buildingNamd: {
    //     type: String,
    //     required: true,
    // },
    
    // numOfHall: {
    //     type: Number,
    // },

    // numOfSeat: {
    //     type: Number,
    //     required: true,
    // },

    // typeOfPlace: {
    //     type: String,
    //     required: true,
    // },

    // location: {
    //     type: String,
    //     required: true,
    // },

    // address: {
    //     type: String,
    //     required: true,
    // },

    // playRoom: {
    //     type: Boolean,
    // },

    // feedingRoom: {
    //     type: Boolean,
    // },

    // disabled: {
    //     type: Boolean,
    // },

    // parking: {
    //     type: Boolean,
    // },
})

module.exports = mongoose.model('Place', placeSchema)