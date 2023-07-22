import express from 'express';
import bodyParser from 'body-parser';

//we can use any name for importing users.js here because its 
//default
import usersRoutes from './routes/users.js';

const app = express();
const PORT = 5000;

app.use(express.json());
app.use(bodyParser.json());

app.use('/users',usersRoutes);

app.get('/',(req,res)=>{
 res.send('Hello from homepage');
})

app.listen(PORT, ()=> {
    console.log(`Server running on port ${PORT}`);
})