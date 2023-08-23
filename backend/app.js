import  express from "express"
import dotenv from "dotenv"
import connection from "./config/db.js"
dotenv.config()
const app = express()
const PORT=process.env.PORT
const MONGODB_URL= process.env.MONGODB_URL

app.use(express.urlencoded({extended:false}))
app.use(express.json())

// the home route
app.get("/",(req,res)=>{
    res.status(200)
    .json({
        success:"true",
        message:"Welcome to Space Note App API"
    })
})

app.listen(PORT,async()=>{
    await connection(MONGODB_URL)
    console.log(`Server started and listening on http://127.0.0.1:${PORT}...`);
})