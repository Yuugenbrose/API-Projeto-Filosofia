const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/admin', authMiddleware, userController.createAdmin);
router.delete('/:id', authMiddleware, userController.deleteUser);
router.put('/:id', authMiddleware, userController.updateUser);

module.exports = router;