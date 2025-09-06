//ES module use kiya hai isley common js ka syntax use nhi kr rhe
import express from 'express';

import { login,signup,logout, allUsers } from '../controller/user_controller.js';
import SecureRoute from '../middleware/SecureRoute.js';

const router=express.Router();
router.post('/signup',signup);
router.post('/login',login);
router.post('/logout',logout);
router.get('/allusers',SecureRoute,allUsers)

export default router;