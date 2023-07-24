const mongoose = require('mongoose');

var Schema = mongoose.Schema;

const UserSchema = new Schema({
  id: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
  },
  bio: {
    type: String,
  },
  contact: {
    type: String,
  },

  name: {
    type: String,
    required: true,
  },
  title: {
    type: String,
  },
  email: {
    type: String,
  },

  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },

  password: {
    type: String,
    required: true,
  },

  date: {
    type: Date,
    default: Date.now,
  },

  department: {
    type: String,
  },

  office: {
    type: String,
  },
  faculty: {
    type: String,
  },
  phone: {
    type: String,
  },
  position: {
    type: String,
  },

  information: {
    type: String,
  },
  teaching: {
    type: String,
  },

  contactInformation: {
    type: String,
  },
  contribution: {
    type: String,
  },
  researchAreas: {
    type: String,
  },
  publications: {
    type: String,
  },
  template: {
    type: Number,
  },
});

module.exports = User = mongoose.model('users', UserSchema);
