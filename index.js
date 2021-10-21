const express = require("express")
const app = express(); 

const PORT = process.env.PORT ||3000;

const htmlRoutes = require("./routes/htmlRoutes");

// First route
app.get('/',(req, res)=>{
    res.sendFile(path.join(__dirname, 'public/index.html'))
})



// Listen for requests
app.listen( PORT, ()=>{
    console.log(`Listening to port ${PORT}`)
})