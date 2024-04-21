const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cartControllers');
const verifyToken = require('../middleware/verifyToken');

router.get('/:email', verifyToken, cartController.getCartByEmail);

router.post('/', cartController.addToCart);
router.delete('/:id', cartController.deleteCart);
router.put('/:id', cartController.updateCart);
router.get('/:id', cartController.getSingleCart);

router.get('/username/:email', cartController.getCartByUsername);

module.exports = router;
