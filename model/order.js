const mongoose = require("mongoose");

const Order = new mongoose.Schema(
    {
        user_id:{
            type: String,
        },
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

module.exports = mongoose.model("Order",Order);