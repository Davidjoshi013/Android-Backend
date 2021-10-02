const asyncHandler = require("../middleware/async");
const Cart = require("../model/cart");

exports.createCart = asyncHandler(async (req, res, next) => {

   const productid =  req.body.product_id;
   const productname = req.body.productName;
   const productprice = req.body.productPrice;

  const student = await Cart.create({product_id:productid,productName: productname, productPrice: productprice});

  res.status(201).json({
    success: true,
    data: student,
  });
});


exports.getCart = asyncHandler(async (req, res, next) => {
  
  const wishlists = await Cart.find({});
  

  res.status(201).json({
    success: true,
    count: wishlists.length,
    data: wishlists,
  });
});

exports.deleteCart = asyncHandler(async (req, res, next) => {
    const product = await Cart.findById(req.params.id);
  
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