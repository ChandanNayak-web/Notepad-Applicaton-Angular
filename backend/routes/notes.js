const express = require('express');
const router = express.Router();
var fetchuser = require('../middleware/fetchuser');
const Note = require('../models/Note');
const { body, validationResult } = require('express-validator'); //https://express-validator.github.io/docs/


//Rout 1:Get all the notes using :GET "/api/notes/fetchallnotes". login require 
router.get('/fetchallnotes', fetchuser, async (req, res) => {
    try {

        const notes = await Note.find({ user: req.user.id });
        res.json(notes)
    } catch (error) {
        console.log(error.message);
        res.status(500).send("Internal Server Error");
    }
})



//Rout 2:Add a new notes using :POST "/api/notes/addnote". login require 
router.post('/addnote', fetchuser, [
    body('title', 'Enter a valid title').isLength({ min: 3 }),
    body('description', 'Description must be atleast 5 character').isLength({ min: 5 }),
], async (req, res) => {
    try {


        const { title, description, tag } = req.body;
        //If there are errors ,return Bad request and the errors
        const errors = validationResult(req); //https://express-validator.github.io/docs/
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() }); // here it will return the error message
        }


        const note = new Note({
            title, description, tag, user: req.user.id
        })
        const savedNote = await note.save();

        res.json(savedNote)
    } catch (error) {
        console.log(error.message);
        res.status(500).send("Internal Server Error");
    }
})



//Rout 3:Update an new notes using :PUT "/updatenote/:id". login require 
router.put('/updatenote/:id', fetchuser, async (req, res) => {
    const { title, description, tag } = req.body;

    //Create a newNote object
    const newNote = {};
    if (title) { newNote.title = title };
    if (description) { newNote.description = description };
    if (tag) { newNote.tag = tag };



    //Find the the note to be updated and update it
    let note =await Note.findById(req.params.id); // here the id is the url id i.e '/updatenote/:id'
    if (!note) {
        return res.status(404).send('Not Found')
    }
    if (note.user.toString() !== req.user.id) {
        return res.status(401).send('Not Allowed')
    }


    note = await Note.findByIdAndUpdate(req.params.id, { $set: newNote }, { new: true })
    res.json({ note });
})

module.exports = router;