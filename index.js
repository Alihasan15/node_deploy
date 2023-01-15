const express = require('express')
const path = require('path')
const dotenv = require('dotenv').config();
const connection = require('./config/db')
// const {errorHandler} = require('./middleware/errorMiddleware')
const portNo = process.env.PORT || 3000;

// console.log(`Connection: ${connection} || Type: ${typeof connection}`)

// connection.connect();

// connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
//   if (error) throw error;
//   console.log('The solution is: ', results[0].solution);
// });
connection.query("SELECT 1 + 1 AS solution", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
});

connection.end();


const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:false}))

// app.use('/api/',require('./routes/default'))
app.get('/',(req,res)=>{
    res.send('Hello World');
})

app.listen(portNo,()=>console.log(`Server started on port ${portNo}`))
