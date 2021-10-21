// The following API routes should be created:
const notes = require('express').Router();
// Package that generates unique IDs for each note 
const { v4: uuidv4 } = require('uuid');

// * `GET /api/notes` should read the `db.json` file and return all saved notes as JSON.

// / GET Route for retrieving all the notes
notes.get('/', (req, res) => {
  readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});

// * `POST /api/notes` should receive a new note to save on the request body, add it to the `db.json` file, and then return the new note to the client. You'll need to find a way to give each note a unique id when it's saved (look into npm packages that could do this for you).



// ## Bonus

// * `DELETE /api/notes/:id` should receive a query parameter that contains the id of a note to delete. To delete a note, you'll need to read all notes from the `db.json` file, remove the note with the given `id` property, and then rewrite the notes to the `db.json` file.