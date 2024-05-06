const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
   name: String,
   email: String,
   medicalID: String,
   profilePic: String,
   video: String,
   department_id: {type: mongoose.Schema.Types.ObjectId, ref: 'Department'},


});

const Doctor = mongoose.model('Doctor', doctorSchema);

module.exports = Doctor;