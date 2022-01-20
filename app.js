const express = require('express');
const createTable = require('./Modules');
const app = express();
const userRouter = require('./Modules/users/routes/users.route');

//middleware
app.use(express.json());

//routes
app.use(userRouter);

//create the db
createTable();

app.listen(3000, ()=>{
    console.log('Server is running on port 3000!')
})