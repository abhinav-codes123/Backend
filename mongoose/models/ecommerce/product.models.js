import mongoose from 'mongoose'

 const productSchema=new mongoose.Schema(
  {
    name:{
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category"
    },
    // original image is stored at cloud, and url of that cloud is stored in database
    image: {
      type: String
    }
  },
  {timestamps: true}
);

 export const Product=mongoose.model('Product',productSchema);