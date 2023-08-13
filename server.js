


const express = require("express");
const bcrypt=require('bcrypt');
const body_parser = require("body-parser");
const cors=require('cors');
const app = express();
app.use(cors());

const saltRounds=10;

// const pg = require('knex')({
//   client: 'pg',
//   connection: process.env.PG_CONNECTION_STRING,
//   searchPath: ['knex', 'public'],
// });
const knex = require('knex')({
  client: 'pg',
  connection: {
    host: 'dpg-cj704jdjeehc73c1k090-a',

    connectionString: 'postgres://shiv:MUZB3Puq7ZfSX2ctzFcqark3UK3WJ69o@dpg-cj704jdjeehc73c1k090-a.oregon-postgres.render.com/db_q3q0',
    port: '5432',
    database: 'db_q3q0',
    user: 'shiv',
    password: 'MUZB3Puq7ZfSX2ctzFcqark3UK3WJ69o',

    ssl:true? { rejectUnauthorized: false } : false,
  }
});
 





app.use(body_parser.json());
app.use(body_parser.text());

app.get("/", (req, res) => {
  
  res.send("this is working");

});



 app.post("/post", async(req, res) => { 

    const name = req.body.name;
    const email = req.body.email;
    const password=req.body.pass;

async function all() {
  var a ="user already registered or some other error";
  try {
    const hashed=await bcrypt.hash(password, 10 );

     await knex('users').insert({ name: name, email: email,pass:hashed });

    //const data = await knex.select('*').from('users').orderBy('id', 'asc');
    a="registration successful";
    //await knex('passwords').insert({ user_id: data[data.length - 1].id, password_hash: hashed });
  } catch (error) {
    // res.json("Error or email already registerd:");
    console.error("Error or email already rgisterd:");
    // Handle the error here if needed
  }
  return(a)
}



async function stat(req,res) {
  try {
    const result = await all();
    res.json(result); 
    console.log(result)
  } catch (e) {
  
    console.error("Error:", ); 
  }
}

await stat(req,res)})

app.listen(3002);
