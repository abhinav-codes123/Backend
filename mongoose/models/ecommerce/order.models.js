import mongoose from 'mongoose'

const cartSchema=new mongoose.Schema(
  {
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product"
    },
    quantity: {
      type: Number,
      default: 0
    }
  }
)
// const statusSchema=new mongoose.Schema(
//   {
//     placed: {
//       type: Boolean,
//       default: false
//     },
//     shipped: {
//       type: Boolean,
//       default: false
//     },
//     delivered: {
//       type: Boolean,
//       default: false
//     }
//   }
// );

const addressSchema=new mongoose.Schema(
  {
    pincode: {
      type: Number,
      required: true
    },
    houseNumber: {
      type: String,
    },
    fullAddress: {
      type: String,
      required: true
    }
  }
)

 const orderSchema=new mongoose.Schema(
   {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    },
    cart: {
      type: [cartSchema]
    },
    // cart: [cartSchema] , this also do same as above

    // products: [
    //   {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "Product"
    //   }
    // ],
// we can use directly in this way, but this become messy and not easy to maintain
    // cart: [
    //   {
    //     productId: {
    //       type: mongoose.Schema.Types.ObjectId,
    //       ref: "Product"
    //     },
    //     quantity: Number
    //   }
    // ]

   price: {
    type: Number,
    required: true  
   },
   address: {
     type: addressSchema
   },
   status:{
     type: String,
     enum: ['placed','shipped','delivered'],
     default: 'placed'
   }
  },
   {timestamps: true}
);

 export const Order=mongoose.model('Order',orderSchema);


 // production approach
//  const cartSchema = new mongoose.Schema({
//   productId: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: "Product"
//   },

//   quantity: Number,

//   productName: String,

//   purchasedPrice: Number
// });