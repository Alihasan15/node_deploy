const express = require('express')
const path = require('path')
const dotenv = require('dotenv').config();
const connection = require('./config/db')
// const {errorHandler} = require('./middleware/errorMiddleware')
const portNo = process.env.PORT || 5000;

// console.log(`Connection: ${connection} || Type: ${typeof connection}`)

// connection.connect();

// connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
//   if (error) throw error;
//   console.log('The solution is: ', results[0].solution);
// });




const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:false}))

// app.use('/api/',require('./routes/default'))
app.get('/',(req,res)=>{
    // console.log(connection);
    connection.query("SELECT 1 + 1 AS solution", function (err, result, fields) {
        if (err) {
            console.log(err);
            res.status(500).json({
                message: err.message,
                error: err
              });
        };
        console.log(result);
        res.json({ 'title': 'SQL test',
        'result': result});
    });
    connection.end();
})

app.listen(portNo,()=>console.log(`Server started on port ${portNo}`))
