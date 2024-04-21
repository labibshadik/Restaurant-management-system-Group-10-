const mongoose = require('mongoose');
const { Schema } = mongoose;

const cartSchema = new Schema({
    menuItemId: String,
    name: {
        type: String,
        trim: true,
        required: true,
        minlength: 3
    },
    recipe: String,
    image: String,
    price: Number,
    quantity: Number,
    email: {
        type: String,
        trim: true,
        required: true,
    },
    useremail: {
        type: String,
        required: true
    },
    restaurant: {
        type: String, // Assuming restaurant name is a string
        required: true // Modify as per your requirement
    }
});

const Cart = mongoose.model("Cart", cartSchema);

module.exports = Cart;
