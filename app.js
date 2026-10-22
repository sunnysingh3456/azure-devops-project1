const express = require('express');
const app = express();
const PORT = Process.env.PORT || 8080;
//health check endpoint
app.get('/', (req, res) => {
    res.status(200).json({ 
        status: 'success' ,
        message: 'Devops project 1 Microservice is Live!' ,
        environment: process.env.NODE_ENV || 'development'
    });
});
app.listen(PORT, () =>{
    console.log('server is running on port ${PORT}');
});// test change
