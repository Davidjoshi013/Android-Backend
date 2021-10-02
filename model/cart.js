const mongoose = require("mongoose");

const Cart = new mongoose.Schema(
    {
        product_id:{
            type: String,
        },
        productName:{
            type: String,
        },
        productPrice:{
            type: String,
        },
          createdAt: {
            type: Date,
            default: Date.now,
          },
    }
);

module.exports = mongoose.model("Cart",Cart);