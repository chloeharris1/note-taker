// The following HTML routes should be created:

// * `GET /notes` should return the `notes.html` file.
const express = require("express");
const router = express.Router();
const path = require("path")

router.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,`public/notes.html`))
 })

 module.exports = router;

// * `GET *` should return the `index.html` file.

// Fallback route for when a user attempts to visit routes that don't exist
app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, 'public/pages/index.html'))
);