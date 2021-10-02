const express = require("express");
const  router = express.Router();

const {
  createOrder, getOrder, deleteOrder
  } = require("../controllers/order");

  const { protect } = require("../middleware/auth");

  router
  .route("/order")
  .post(protect,createOrder)

  router
  .route("/order")
  .get(protect,getOrder)

  router
  .route("/order/delete/:id")
  .delete(protect,deleteOrder)

  module.exports = router