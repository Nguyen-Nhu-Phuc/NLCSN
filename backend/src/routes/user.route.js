import express from 'express';
import userController from '../controllers/user.controller.js';
import middlewareController from '../controllers/middleware.controller.js';

const router = express.Router();

router.get("/",middlewareController.verifyToken, userController.getAllUser);
router.delete("/:id",userController.deleteUser);

export default router;