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

const ReservationRoute=require ("./Route/ReservationRoute")
app.use("/reservation",ReservationRoute)


//dotenv
const dotenv = require ("dotenv")
dotenv.config()


database()

app.use('/css', express.static(__dirname + 'public/css'))

app.set('view engine', 'ejs')
app.set('views', __dirname + '/views');

app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json());

app.use(express.static("angular"));



//server
app.listen (process.env.PORT, ()=>{
    console.log(`Listening on port ${process.env.PORT}`);
});