const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  personName: {
    type: String,       //shiv loharkar
    required: true,
    trim: true
  },
  timeline: {
    type: String,   //2 days ago
    default: '',
    trim: true
  },
  flag: {
    type: String,      //New
    default: ''
  },
  image: {
    type: String,
    default: 'default-avatar.webp'  // fallback image
  },
  category: {
    type: String,  
    required: true,
    trim: true,
    lowercase: true
  },
  reviewText: {
    type: String,
    required: true,
    trim: true
  },
  reviewCount: {
    type: Number,
    default: 1
  },
  rating: {
    type: Number,
    required:true
  },
  imageList: {
    type: [String],
    default: []
  },
  likeCount: {
    type: Number,
    default: 0
  }
}, { timestamps: true });

module.exports = mongoose.model('Review', reviewSchema);