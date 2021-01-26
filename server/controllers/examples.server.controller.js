const Example = require('../models/examples.server.model.js')

exports.hello = function(req, res) {
    res.send('world')
};

exports.create = async function (req, res) {
    try {
        const example = await Example.create(req.body);
        res.json({success: true, message: "success"});
    } catch (err) {
        res.json({success: false, code: err.code});
    }
}