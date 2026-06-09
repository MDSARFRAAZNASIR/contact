const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  contact: {
    type: Number,
    required: true,
  },
  relation: String,
  // category:String,
  // userId:String,
  // company:String
});
module.exports = mongoose.model('contacts', productSchema);
