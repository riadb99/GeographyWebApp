const userMiddleware = require('../controllers/userController.js');
const express = require('express');
const router = express.Router();

router.get('/', userMiddleware.getAllUsers);
router.get('/:email', userMiddleware.getUserByEmail);
router.post('/', userMiddleware.createUser);
router.delete('/:email', userMiddleware.deleteUserByEmail);

module.exports = router;