import express from 'express';
import { sendMessage , getMessage} from '../controllers/message.cotroller.js';
import protectedRoute  from  '../middleware/protectedRoute.js'

const router  =  express.Router();

router.get('/:id', protectedRoute, getMessage)
router.post('/send/:id', protectedRoute ,sendMessage) // protected route is used to verify the person is logged in or not if not then message logging first and protect the sendmessage function to be initiated 

export default router;