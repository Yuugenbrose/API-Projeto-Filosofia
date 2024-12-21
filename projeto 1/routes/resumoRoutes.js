const express = require('express');
const router = express.Router();
const resumoController = require('../controllers/resumoController');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/', authMiddleware, resumoController.createResumo);
router.get('/', resumoController.getResumos);
router.get('/:id', resumoController.getResumoById);
router.put('/:id', authMiddleware, resumoController.updateResumo);
router.delete('/:id', authMiddleware, resumoController.deleteResumo);

module.exports = router;