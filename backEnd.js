// install and imported modules like express, mysql, cors and nodemon
const express= require('express');
const mysql= require('mysql');
const cors= require('cors');

// initializing express and enable cross-origin
const page=express()
page.use(cors());
page.use(express.json());

//connecting db and node js using createConnection()
const conDB= mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "myapp"
})

//sending data to server 
page.post('/myapp', (req, res)=>{
    const sql= "INSERT INTO signup(`Name`, `Email`, `Password`, `conPassword`) values(?)";
    const values= [
        req.body.Name,
        req.body.Email,
        req.body.Password,
        req.body.conPassword
    ]
    console.log("SQL Query:", sql);
    console.log("Values:", values);
    conDB.query(sql, [values], (err,data)=>{
        if(err) return res.json(err);               //error handling
        return res.json(data);
    })
})

//starting express and listening for incoming request 
page.listen(8081, ()=>{
    console.log("Listening...");
})