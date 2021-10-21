// The following HTML routes should be created:

// * `GET /notes` should return the `notes.html` file.
const html = require('express').Router();

router.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,`public/notes.html`))
 })

// * `GET *` should return the `index.html` file.
app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, 'public/index.html'))
);

module.exports = html;