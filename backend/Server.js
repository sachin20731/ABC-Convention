// const express  = require('express');
// const cors =require("cors")
// const mysql= require("mysql")

// const app = express();
// app.use(express.json());

// app.use(cors());

// const db = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "",
//     database: "meeting"

// })

// app.get("/",(req,res)=> {
//     const sql = "SELECT * FROM rooms";
//     db.query(sql,(err,data)=> {
//         if(err) return res.json("Error");
//         return res.json(data);
//     })

// })

// app.listen(8082, ()=>{
//     console.log('listening');
// })

const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const PORT = 8080
const Db = require(`./db`)
const Sm = require(`./routs`)
const app = express()

app.use(bodyParser.json())

Db.connect()
app.use(cors())

app.use('/meeting',Sm)


app.listen(PORT, ()=>{
    console.log(`server run successful on ${PORT}`)
    console.log('Dhanushkage backend ek run wenne PORT: ' + PORT)
})