import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {


    const notesInitial = [
        {
            "_id": "62613c9a77d5f5de060b33cf",
            "user": "6260041f8ed5221e7adc66a9",
            "title": "my title",
            "description": "please concentrate on your study don't divert",
            "tag": "personal",
            "date": "2022-04-21T11:14:34.577Z",
            "__v": 0
        },
        {
            "_id": "6262253d799320b16925897e",
            "user": "6260041f8ed5221e7adc66a9",
            "title": "my title",
            "description": "please concentrate on your study don't divert",
            "tag": "personal",
            "date": "2022-04-22T03:47:09.280Z",
            "__v": 0
        },
        {
            "_id": "62613c9a77d5f5de061b53cf",
            "user": "6260041f8ed5221e7adc66a9",
            "title": "my title",
            "description": "please concentrate on your study don't divert",
            "tag": "personal",
            "date": "2022-04-21T11:14:34.577Z",
            "__v": 0
        },
        {
            "_id": "6262253d099320b1c925897e",
            "user": "6260041f8ed5221e7adc66a9",
            "title": "my title",
            "description": "please concentrate on your study don't divert",
            "tag": "personal",
            "date": "2022-04-22T03:47:09.280Z",
            "__v": 0
        },
        {
            "_id": "62613c9a77d0f5de060b53cf",
            "user": "6260041f8ed5221e7adc66a9",
            "title": "my title",
            "description": "please concentrate on your study don't divert",
            "tag": "personal",
            "date": "2022-04-21T11:14:34.577Z",
            "__v": 0
        },
        {
            "_id": "6262253dr99320b1c925897e",
            "user": "6260041f8ed5221e7adc66a9",
            "title": "my title",
            "description": "please concentrate on your study don't divert",
            "tag": "personal",
            "date": "2022-04-22T03:47:09.280Z",
            "__v": 0
        }
    ]


    const [notes, setNotes] = useState(notesInitial)



    // Add A Note
    const addNote = (title, description, tag) => {
        //TODO: api call
        console.log('Adding a new note');

        const note = {
            "_id": "6262253d79932vb1c925897e",
            "user": "6260041f8ed5221e7adc66a9",
            "title": title,
            "description": description,
            "tag": tag,
            "date": "2022-04-22T03:47:09.280Z",
            "__v": 0
        };
        setNotes(notes.concat(note))
    }

    // Delete A Note
    const deleteNote = (id) => {
        //TODO: api call
        console.log('Deleting the note id' + id);
        const newNotes = notes.filter((note) => { return note._id !== id })
        setNotes(newNotes)
    }

    // Edit A Note
    const editNote = (id, title, description, tag) => {

    }


    return (
        <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote }}>
            {props.children}
        </NoteContext.Provider>
    )
}


export default NoteState;