const express = require("express");
const  router = express.Router();

const {
  createCart, getCart, deleteCart
  } = require("../controllers/cart");

  const { protect } = require("../middleware/auth");

  router
  .route("/cart")
  .post(protect,createCart)

  router
  .route("/cart")
  .get(protect,getCart)

  router
  .route("/cart/delete/:id")
  .delete(protect,deleteCart)

  module.exports = router