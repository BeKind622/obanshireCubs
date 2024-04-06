const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    email: String,
    password: String,
    forename: String,
    surname: String,
    department: String,
    guardian: String,
    guardian_name: String,
    notes: String,
    dob: Date,
    appointment_date: Date,
    appointment_notes: String,
    photo: String,
    patient_number: Number,
    isParent: String,
    department_id: {type: mongoose.Schema.Types.ObjectId, ref: 'Department'},
    doctor_id: {type: mongoose.Schema.Types.ObjectId, ref: 'Doctor'},
   


});

const User = mongoose.model('User', userSchema);

module.exports = User;