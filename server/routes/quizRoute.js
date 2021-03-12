const quizMiddleware = require('../controllers/quizController.js');
const express = require('express');
const router = express.Router();

router.get('/', quizMiddleware.getDefaultQuiz);
router.get('/:type/:difficulty/:count', quizMiddleware.getCustomQuiz);

module.exports = router;