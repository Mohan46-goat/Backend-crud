const mongoose = require("mongoose");


const ProductSchema = mongoose.Schema({
    id:{
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    subname: {
        type: String,
        required: true
    },
    introimg: {
          type: String,
          required: false
    },
    price: {
        type: Number,
        required: true,
        default:0
    },
    pricecaption: {
        type:String,
        required: false
    },
    image:{
       type:String,
       required:false,
       
    },
    quantity: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: false,
    }
},
   {
    timestamps: true,
   }

);

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;