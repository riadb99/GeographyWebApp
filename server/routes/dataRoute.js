const dataMiddleware = require('../controllers/getData.js');
const express = require('express');
const router = express.Router();

router.get('/:name', dataMiddleware.getData);

module.exports = router;