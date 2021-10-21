const express = require("express")
const app = express(); 

const PORT = process.env.PORT ||3000;

const htmlRoutes = require("./routes/htmlRoutes");

// GET Route for homepage
app.get('/',(req, res)=>{
    res.sendFile(path.join(__dirname, 'public/index.html'))
})

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', api);

app.use(express.static('public'));

// Listen for requests
app.listen( PORT, ()=>{
    console.log(`Listening to port ${PORT}`)
})