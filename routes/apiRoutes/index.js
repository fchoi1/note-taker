const router = require('express').Router();
const fs = require('fs');
const path = require('path');
let db = require('../../db/db.json');
const {createNote, deleteNote} = require('../../lib/notes');

// Get all notes
router.get('/notes', (req, res) => {
    db = JSON.parse(fs.readFileSync(path.join(__dirname, '../../db/db.json')));
    res.json(db)
})

// Create new notes
router.post('/notes', (req, res) => {
    const noteObj = createNote(req.body, db);
    res.json({
        message: "success",
        data: noteObj
    });
})

// Delete note
router.delete('/notes/:id', (req, res) => {
    console.log('Deleting id', req.params.id)
    const noteObj = deleteNote(req.params.id, db);
    res.json({
        message: "deleted",
        data: noteObj
    });
})

module.exports = router;
