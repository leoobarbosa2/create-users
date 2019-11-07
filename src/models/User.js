const mongoose = require('mongoose')

const User = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  profession: {
    type: String,
    required: true,
  }
}, {
  timestamps: true,
});

module.exports = mongoose.model('User', User)