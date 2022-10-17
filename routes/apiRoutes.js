const fs = require("fs");
const path = require("path")
const router = require("express").Router()
const notes = require("../db/db.json")
const uuidv1 = require("uuidv1")

router.get("/notes", (req, res) => res.json(notes));
router.post("/notes", (req, res) => {
    const savedNotes = notes
    const newNote = {
        id: uuidv1(),
        title: req.body.title,
        text: req.body.text,
    }
    savedNotes.push(newNote)
    console.log(savedNotes)
    fs.writeFileSync(path.join(__dirname, '../db/db.json'), JSON.stringify(savedNotes))
    res.json(newNote)
});
// [{"id":1,"title":"test2","text":"test2"},{"id":2,"title":"new","text":"new"}]
router.delete("/notes/:id", (req, res) => {
    const id = req.params.id;
    const savedNotes = notes;
    // const newNotes = savedNotes.filter(note => note.id !==id)
    for (let index = 0; index < savedNotes.length; index++) {
        if (savedNotes[index].id === id) {
            savedNotes.splice(index, 1)
        }
        
    }
    console.log(savedNotes)
    fs.writeFileSync(path.join(__dirname, '../db/db.json'), JSON.stringify(savedNotes))
    res.json(savedNotes)
})

module.exports = router;