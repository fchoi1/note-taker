const router = require('express').Router();
const db = require('../../db/db.json');
const createNote = require('../../lib/notes');


router.get('/notes', (req, res) => {
    res.json(db)
})

router.post('/notes', (req, res) => {
    const noteObj = createNote(req.body, db);
    res.send(noteObj);
})

module.exports = router;
