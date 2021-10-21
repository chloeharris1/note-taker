const express = require("express")
const app = express(); 

const html = require("./routes/html");
const notes = require("./routes/notes");

const PORT = process.env.PORT ||3000;

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', api);

app.use(express.static('public'));

app.use(html)
app.use("/api/db",notes)

// GET Route for homepage
app.get('/',(req, res)=>{
    res.sendFile(path.join(__dirname, 'public/index.html'))
})

// Listen for requests
app.listen( PORT, ()=>{
    console.log(`Listening to port ${PORT}`)
})