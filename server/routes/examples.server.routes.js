const examples = require('../controllers/examples.server.controller.js'),
    express = require('express'), 
    router = express.Router()

router.route('/')
  .get(examples.hello );

router.post('/', examples.create);
  
module.exports = router;