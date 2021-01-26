const mongoose = require('mongoose');

const testSchema = new mongoose.Schema({
    name: {type: String},
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true}
});


const TestModel = mongoose.model('test', testSchema);
module.exports = TestModel;