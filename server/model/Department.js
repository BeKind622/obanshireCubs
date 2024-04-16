const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    doctor: String,
    location: String,
    doctorID: {type: mongoose.Schema.Types.ObjectId, ref: 'Doctor'},
});
const department = mongoose.model('department', userSchema);
module.exports = department;