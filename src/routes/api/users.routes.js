import { Router } from 'express';
import { getAllUsers, createUser, getUserInfo, getUserById, deleteUser } from '../../controllers/user.controllers.js';


const router = Router();

router.get('/', getAllUsers);

router.post('/', createUser);

router.get('/:id', getUserById);

router.get('/:id/:info',getUserInfo)

router.delete('/:id', deleteUser)



export default router;