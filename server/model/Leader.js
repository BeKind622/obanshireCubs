const mongoose = require('mongoose');

const leadersSchema = new mongoose.Schema({
    email: String,
    password: String,
    userType: String,
    // name: String,
  
    // department_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Department' },
    
});

const Leader = mongoose.model('Leader', leadersSchema);

module.exports = Leader;

