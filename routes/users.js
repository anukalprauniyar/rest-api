import express from 'express';
import { getUsers , getUser, createUser, deleteUser, updateUser } from '../controllers/users.js';
// import {v4 as uuidv4} from 'uuid';

// Why should I use Express router?
// Express Routers are a way to organize
// your Express application such that your 
// primary app. js file does not become 
// bloated and difficult to reason about.

const router = express.Router();

// let users = [
    // {
    //     firstname:"Anukalp",
    //     lastName:"Rauniyar",
    //     age:23
    // },
    // {
    //     firstname:"Aniket",
    //     lastName:"Maurya",
    //     age:24
    // }
// ]

//all routes in here are starting with /users
router.get('/', getUsers)

router.post('/', createUser)

router.get('/:id' , getUser)

router.delete('/:id' , deleteUser)


//for partially update
 router.patch('/:id', updateUser)


export default router;
