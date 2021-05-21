const mongoose = require("mongoose")


const PetSchema = new mongoose.Schema({
    name:{
        type: String,
        required:[true, "Pet name is required!"],
        minLength: [3, "Pet name must be at least 3 chars"],
        maxLength: [50, "Pet name can't be that longer than 50 chars"]
    },

    type: {
        type: String,
        required: [true, "Pet type is required"],
        minLength: [3, "Pet type must be at least 3 chars"],
        maxLength: [50, "Pet type can't be that longer than 50 chars"]
    },

    desc: {
        type: String,
        required: [true, "Description is required"],
        minLength: [3, "Pet description must be at least 3 chars"],
        maxLength: [200, "Pet description can't be that longer than 200 chars"]
    },

    skillone:{
        type: String,
        required:[true, "1 skill is required!"],
        minLength: [3, "Skill must be at least 3 chars"],
        maxLength: [50, "Pet skills can't be that longer than 50 chars"]
    },

    skilltwo:{
        type: String,
    },

    skillthree:{
        type: String,
    }


}, {timestamps:true})


const Pet = mongoose.model("Pet", PetSchema );

module.exports = Pet;