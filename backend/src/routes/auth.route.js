import express from 'express';
import authController from '../controllers/auth.controller.js';


const router = express.Router();
//Sign In
router.post('/register', authController.signUp);
//Sign Up
router.post('/login', authController.signIn);

//Refresh
router.post('/refresh', authController.requestRefreshToken);

router.post('/signout', authController.signOut);

export default router;