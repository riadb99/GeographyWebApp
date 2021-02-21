const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    email: { type: String, required: true, unique: true },
    country: { type: String },
    rank: {type: Number},
    highscore: {type: Number}
});


const UserModel = mongoose.model('user', userSchema);
module.exports = UserModel;