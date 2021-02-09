const fetch = require('node-fetch');

exports.getData  = function(req, res) {

    res.send("test");

    const search = req.params.country;
    //console.log("Step 1");

    async function getInfo() {
        let response = await fetch('https://restcountries.eu/rest/v2/name/'+search);
        let data = await response.json();
        //console.log("Step 2");
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