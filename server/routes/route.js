import express from  'express';
import { getProductById, getProducts } from '../controller/product-controller.js';
import { userSignUp, userLogIn } from '../controller/user-controller.js';
// import { addItemInCart } from '../controller/cart-controller.js';
import { addPaymentGateway, paymentResponse } from '../controller/payment-controller.js';

const router = express.Router();

//login & signup
router.post('api/signup', userSignUp);
router.post('api/login', userLogIn);

router.get('api/products', getProducts);
router.get('api/product/:id', getProductById);

// router.post('/cart/add', addItemInCart);

router.post('api/payment', addPaymentGateway);
router.post('api/callback', paymentResponse);

export default router;