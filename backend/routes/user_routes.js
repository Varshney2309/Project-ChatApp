//ES module use kiya hai isley common js ka syntax use nhi kr rhe
import express from 'express';

import { signup } from '../controller/user_controller.js';

const router=express.Router();
router.post('/signup',signup)

export default router;