import Express from "express";
import Mariadb from "mariadb";
import mongoose from "mongoose";
import { v4 } from "uuid";


const app = Express();
app.get('/', (req, res) =>{
    // res.send('Hello World');
    res.json({
        id:v4()
    })
});


// const pool = Mariadb.createPool(
//     {
//         host: 'localhost',
//         port: '3306', 
//         user: 'gabo',
//         password: 'gabopassword',
//         connectionLimit: 5
//     }
// );


// async function asyncFunctionMariaDB() {
//     let conn;
//     try {

//         conn = await pool.getConnection();
//         const rows = await conn.query("SELECT 1 + 1");
//         console.log('MariaDB Connected ',rows);

//     } finally {
//         if (conn) conn.release(); //release to pool
//     }
// }

// async function asyncFunctionMongoDB() {
//     let conn;
//     conn = await mongoose.connect('mongodb://localhost:27017/twitchDB');
//     console.log('MongoDB Connected ', conn.connections[0].name);
// }


// asyncFunctionMariaDB();  
// asyncFunctionMongoDB();

app.listen(3000);
console.log('Server Express on Port 3000');

