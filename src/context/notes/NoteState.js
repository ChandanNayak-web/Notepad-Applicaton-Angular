import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {

    const host = "http://localhost:5000"

    const notesInitial = []


    const [notes, setNotes] = useState(notesInitial)




    // Get All Notes
    const getNotes = async () => {
        //TODO: api call

        //API Call
        const response = await fetch(`${host}/api/notes/fetchallnotes`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjI2MDA0MWY4ZWQ1MjIxZTdhZGM2NmE5In0sImlhdCI6MTY1MDUxMDYwOX0.4ySRc_4DQ8j64dCKJwUX-wCSb2M8Xv8ckSc-6WdZvJ8'
            }
        });

        const json = await response.json()
        console.log(json);
        setNotes(json)


    }





    // Add A Note
    const addNote = async (title, description, tag) => {
        //TODO: api call

        //API Call
        const response = await fetch(`${host}/api/notes/addnote`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjI2MDA0MWY4ZWQ1MjIxZTdhZGM2NmE5In0sImlhdCI6MTY1MDUxMDYwOX0.4ySRc_4DQ8j64dCKJwUX-wCSb2M8Xv8ckSc-6WdZvJ8'
            },
            body: JSON.stringify({ title, description, tag })
        });








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
    const editNote = async (id, title, description, tag) => {
        //API Call
        const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjI2MDA0MWY4ZWQ1MjIxZTdhZGM2NmE5In0sImlhdCI6MTY1MDUxMDYwOX0.4ySRc_4DQ8j64dCKJwUX-wCSb2M8Xv8ckSc-6WdZvJ8'
            },
            body: JSON.stringify({ title, description, tag })
        });
        const json = response.json();





        //Logic to edit in clint
        for (let index = 0; index < notes.length; index++) {
            const element = notes[index];
            if (element._id === id) {
                element.title = title;
                element.description = description;
                element.tag = tag;
            }
        }
    }


    return (
        <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes }}>
            {props.children}
        </NoteContext.Provider>
    )
}


export default NoteState;