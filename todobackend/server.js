//using express
const express = require('express');
require('dotenv').config()
const mongoose = require('mongoose');

//create an instance of express
const app = express();

//import routes
const taskRoutes = require('./routes/taskRoute');

//define a route
// app.get('/',(req,res)=> { 
//     res.send("hello worlddddd")
// });

//middleware
app.use((req,res,next) =>
{
    console.log('path '+req.path + 'method' + req.method);
    next();
})

//middleware to parse json
app.use(express.json());

//db connection
mongoose.connect(process.env.MANGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        app.listen(process.env.PORT, () => {
    console.log("db connect sucess server is listening to port"+ process.env.PORT);
}); 
    }).catch((error) => console.log( error));
//start the server
const port = 3000;

app.use('/api/tasks', taskRoutes);

