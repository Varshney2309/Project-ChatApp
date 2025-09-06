import express from 'express'
import { getMessage, sendMessage } from '../controller/message_controller.js';
import SecureRoute from "../middleware/SecureRoute.js"

const router = express.Router();
router.post("/send/:id",SecureRoute,sendMessage);
router.get("/get/:id",SecureRoute,getMessage);


export default router;