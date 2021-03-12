const fetch = require('node-fetch');

/*
Returns 20 multiple quiz questions of medium difficulty
 */
exports.getDefaultQuiz  = async function (req, res) {

    async function getInfo() {
        let response = await fetch('https://opentdb.com/api.php?amount=20&category=22&difficulty=medium&type=multiple');
        let data = await response.json();
        return data;
    }

    getInfo().then(data => {
        if (data.code === '404') {
            let error_obj = {message : "Quiz Not Found"};
            res.status(404).json(error_obj.message);
            res.write("error");
        }
        else {
            res.json({data});
        }
        res.end();
    })

};

/*
Returns custom questions specified by the request parameters
 */
exports.getCustomQuiz  = function(req, res) {

    async function getInfo() {
        var count = req.params.count
        var type = req.params.type
        var difficulty = req.params.difficulty

        if(type === 'boolean' && req.params.difficulty === 'hard'){
            difficulty = 'medium'
        }

        var url = 'https://opentdb.com/api.php?amount=' + count + '&category=22&difficulty=' + difficulty + '&type=' + type
        let response = await fetch(url);
        let data = await response.json();
        return data;
    }

    getInfo().then(data => {
        if (data.code === '404') {
            let error_obj = {message : "Quiz Not Found"};
            res.status(404).json(error_obj.message);
        }
        else if (data.response_code === 2){
            let error_obj = {code: 400, message : "Bad Request"};
            res.status(400).json(error_obj);
        }
        else {
            res.json({data});
        }
        res.end();
    })
};

