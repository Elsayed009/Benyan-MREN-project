require("dotenv").config()
const express = require("express")
const app = express()
const connectDB = require("./config/db")
app.use(express.json())

// logger
if (process.env.NODE_ENV === "dev"){
    app.use((req,res,next)=>{
        console.log(`${req.method} ${req.originalUrl}`)
        next();
    })
}

app.get("/test", (req,res)=>{
    res.json({msg:"Test Route"})
})

const port = process.env.PORT || 3000

app.listen(port, ()=>{
    console.log(`server running at http://localhost:${port}`)
})

connectDB()