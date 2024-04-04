const express=require("express")
const app=express()

//db connect
const database=require ("./config/database")



//json
const bodyParser =require("express").json

app.use(bodyParser());


//routes
const UserRoute=require ("./Route/UserRoute")
app.use("/user",UserRoute)

const SalleRoute=require ("./Route/SalleRoute")
app.use("/salle",SalleRoute)


//dotenv
const dotenv = require ("dotenv")
dotenv.config()


database()



//server
app.listen (process.env.PORT, ()=>{
    console.log(`Listening on port ${process.env.PORT}`);
});