const mongoose = require('mongoose');

const propertySchema = new mongoose.Schema({
  area_type: String,
  availability: String,
  location: String,
  size: String,
  society: String,
  total_sqft: Number,
  bath: Number,
  balcony: Number,
  price: Number,
  // Add any other fields you need
});

module.exports = mongoose.model('Property', propertySchema);
