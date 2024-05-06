const mongoose = require('mongoose');

const departmentSchema = new mongoose.Schema({
  name: String,
  doctor: String,
  location: String,
 video: String,
 doctor_id: {type: mongoose.Schema.Types.ObjectId, ref: 'Doctor'},

});

const Department = mongoose.model('Department', departmentSchema);

module.exports = Department;

