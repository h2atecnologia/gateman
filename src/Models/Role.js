const mongoose = require('mongoose');

var RoleSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true,'Sorry, the role name is required'],
        unique: true
    }
});


module.exports = mongoose.model('Role',RoleSchema);