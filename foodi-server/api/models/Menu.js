const mongoose = require('mongoose');
const {Schema} = mongoose;

// create schema object for Menu Items
const menuSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: true,
        minlength: 3
    },
    recipe: String,
    image: String, 
    category: String,
    price: Number,
    createdAt: {
        type: Date,
        default: Date.now
    },
    restaurant: {
        type: String, // Assuming restaurant name is a string
        required: true // Modify as per your requirement
    },
    useremail: {
        type: String,
        required: true
    }

})

// create model
const Menu = mongoose.model("Menu", menuSchema);
module.exports = Menu;