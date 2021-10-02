const asyncHandler = require("../middleware/async");
const Order = require("../model/order");

exports.createOrder = asyncHandler(async (req, res, next) => {

    const userid = req.user.id;
   const productid =  req.body.product_id;
   const productname = req.body.productName;
   const productprice = req.body.productPrice;

  const student = await Order.create({user_id:userid,product_id:productid,productName: productname, productPrice: productprice});

  res.status(201).json({
    success: true,
    data: student,
  });
});


exports.getOrder = asyncHandler(async (req, res, next) => {
  
  const wishlists = await Order.find({});
  

  res.status(201).json({
    success: true,
    count: wishlists.length,
    data: wishlists,
  });
});

exports.deleteOrder = asyncHandler(async (req, res, next) => {
    const product = await Order.findById(req.params.id);
  
    if (!product) {
      return next(new ErrorResponse(`No student found `), 404);
    }
  
    await product.remove();
  
    res.status(200).json({    
      success: true,
      count: product.length,
      data: {},
    });
  });