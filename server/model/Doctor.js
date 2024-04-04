const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
    name: String,
   speciality: String,
   department_id: {type: mongoose.Schema.Types.ObjectId, ref: 'Department'},
   contact: String,
   photo: String

});

const Doctor = mongoose.model('Doctor', doctorSchema);

module.exports = Doctor;