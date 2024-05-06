const mongoose = require('mongoose');

const parentsSchema = new mongoose.Schema({
    email: String,
    password: String,
    userType: String,
    // name: String,
  
    // department_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Department' },
    
});

const Parent = mongoose.model('Parent', parentsSchema);

module.exports = Parent;


