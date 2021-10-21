const notes = require('express').Router();
const fs = require("fs");
const path = require('path');

// Package that generates unique IDs for each note 
const { v4: uuidv4 } = require('uuid');

// * `GET /api/notes` should read the `db.json` file and return all saved notes as JSON.
// / GET Route for retrieving all the notes
notes.get('/api/notes', (req, res) => {
  fs.readFile(path.join(__dirname,'../db/db.json'), 'utf8', (err, data) => {
    if (err) throw err;

    res.json(JSON.parse(data));
  });
});

// * `POST /api/notes` should receive a new note to save on the request body, add it to the `db.json` file, and then return the new note to the client. You'll need to find a way to give each note a unique id when it's saved (look into npm packages that could do this for you).
// POST Route for a new note
notes.post('/api/notes', (req, res) => {
  
    
    if (req.body) {
        const newNote = req.body;
        newNote.id = uuidv4()

  
      return fs.readFile(path.join(__dirname,'../db/db.json'), 'utf8', (err, data) => {
        if (err) throw err;
    
        const allNotes = JSON.parse(data);
        allNotes.push(newNote);

        fs.writeFile(path.join(__dirname,'../db/db.json'), JSON.stringify(allNotes),'utf8', () => {
            res.json(allNotes);
        });
      });
    } else {
      res.error('Error in adding note');
    }
  });


// ## Bonus
// * `DELETE /api/notes/:id` should receive a query parameter that contains the id of a note to delete. To delete a note, you'll need to read all notes from the `db.json` file, remove the note with the given `id` property, and then rewrite the notes to the `db.json` file.
notes.delete('/api/notes/:id', (req, res) => {
    const id = req.params.id;

    return fs.readFile(path.join(__dirname,'../db/db.json'), 'utf8', (err, data) => {
        if (err) throw err;
    
        const allNotes = JSON.parse(data);
        
        const filteredNoted = allNotes.filter((note) => note.id !== id);

        fs.writeFile(path.join(__dirname,'../db/db.json'), JSON.stringify(filteredNoted),'utf8', () => {
            res.json(filteredNoted);
        });
      });
})

module.exports = notes;