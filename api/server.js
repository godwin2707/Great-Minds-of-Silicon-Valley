const express = require("express")
const app = express()

const bio = require("../data/bio.js")


app.get("/api/bio",(req,res)=>{   // api.use() is used for all HTTP methods 
                                  //render host in its port so it is has be to dynamically mentioned in the code 
    const randomIndex= Math.floor(Math.random()*bio.length)
    const bioDes=bio[randomIndex]
    res.set('Cache-Control','no-store')
    res.json(bioDes)
})


const Port = process.env.PORT || 3000 

app.listen(Port,()=>{
    console.log(`Server is running on port ${Port}`)
})