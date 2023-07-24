const mongoose = require('mongoose');

var Schema = mongoose.Schema;

const CollegeSchema = new Schema({
  id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
});

module.exports = College = mongoose.model('college', CollegeSchema);
