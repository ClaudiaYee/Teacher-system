const mongoose = require('mongoose');

var Schema = mongoose.Schema;

const PaperSchema = new Schema({
  id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  url: {
    type: String,
  },
  poster: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Paper = mongoose.model('paper', PaperSchema);
