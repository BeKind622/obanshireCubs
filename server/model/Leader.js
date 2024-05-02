const mongoose = require('mongoose');

const leadersSchema = new mongoose.Schema({
    email: String,
    password: String,
    // name: String,
  
    // department_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Department' },
    
});

const Leader = mongoose.model('Leader', leadersSchema);

module.exports = Leader;


