const express = require("Express")
const app = express(); 

const PORT = 3000;

// First route
app.get('/',(req, res)=>{
    res.send("eventually this will be the homepage")
})


// Listen for requests
app.listen( PORT, ()=>{
    console.log(`Listening to port ${PORT}`)
})