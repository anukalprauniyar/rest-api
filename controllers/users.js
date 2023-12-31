import {v4 as uuidv4} from 'uuid';

let users = [
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
]

export const getUser = (req,res) => {
    const { id }  = req.params;
    const foundUser = users.find((user)=> user.id === id);
    res.send(foundUser);
}

export const getUsers = (req,res)=> {
    //  console.log(users);
     res.send(users);
    }

export const createUser = (req,res) => {
    const user = req.body;

    // const userId = uuidv4();

    const userWithId = { ...user, id:uuidv4()};

    users.push(userWithId);

    res.send(`User with the name ${user.firstName} added to the database`);
}

export const deleteUser = (req,res) => {
    const { id } = req.params;

    users = users.filter((user) => user.id !== id)

    res.send(`User with the id ${id} is deleted from the database`);
 }
export const updateUser = (req,res)=>{
    const { id } = req.params;

    const {firstName,lastName,age} = req.body;
    
    const userToBeUpdated = users.find((user) => user.id === id);
    
    if(firstName) userToBeUpdated.firstName = firstName;
    if(lastName) userToBeUpdated.lastName = lastName;
    if(age) userToBeUpdated.age = age;

    res.send(`User with id ${id} is updated.`)
 }