const fetch = require('node-fetch');

exports.getData  = function(req, res) {

    const search = req.params.name;
    async function getInfo() {
        let response = await fetch('https://restcountries.eu/rest/v2/name/'+search);
        let data = await response.json();
        return data;
    }

    getInfo().then(data => {
        //data.name == null
        if (data.code === '404') {
            let error_obj = {message : "Please Introduce a Valid Name"};
            res.status(404).json(error_obj.message);
            res.write("error");
            //console.log("Step 3");
        }
        else {
            res.json({data});
        }
        res.end();
    })
};