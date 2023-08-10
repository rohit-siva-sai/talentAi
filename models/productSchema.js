const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
 
  title: { type: String },
  slug: { type: String },
  desc: { type: String },
  img: { type: String },
  category: { type: String },
  size: { type: String }, // An array of strings for sizes
  color: { type: String },
  price: { type: Number },
  availableQty: { type: Number },
  createdAt: { type: Date },
  updatedAt: { type: Date },
  country: { type: String },

});


mongoose.models = {};

export default mongoose.models.Product ||
  mongoose.model("Product", productSchema);

// const Product = mongoose.model('Product', productSchema);

// module.exports = Product;
