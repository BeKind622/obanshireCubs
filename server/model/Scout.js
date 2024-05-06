const mongoose = require('mongoose');

const scoutsSchema = new mongoose.Schema({
    email: String,
    password: String,
    userType: String,
    // name: String,
  
    // department_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Department' },
    
});

const Scout = mongoose.model('Scout', scoutsSchema);

module.exports = Scout;


