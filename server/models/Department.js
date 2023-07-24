const mongoose = require('mongoose');

var Schema = mongoose.Schema;

const DepartmentSchema = new Schema({
  id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  college: {
    type: String,
    required: true,
  },
});

module.exports = Department = mongoose.model('department', DepartmentSchema);
