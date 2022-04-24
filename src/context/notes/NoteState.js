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


        const note = await response.json();
        setNotes(notes.concat(note))

    }

    // Delete A Note
    const deleteNote = async (id) => {
        // API call
        const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjI2MDA0MWY4ZWQ1MjIxZTdhZGM2NmE5In0sImlhdCI6MTY1MDUxMDYwOX0.4ySRc_4DQ8j64dCKJwUX-wCSb2M8Xv8ckSc-6WdZvJ8'
            }
        });
        const json = response.json();







        const newNotes = notes.filter((note) => { return note._id !== id })
        setNotes(newNotes)
    }

    // Edit A Note
    const editNote = async (id, title, description, tag) => {
        //API Call
        const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjI2MDA0MWY4ZWQ1MjIxZTdhZGM2NmE5In0sImlhdCI6MTY1MDUxMDYwOX0.4ySRc_4DQ8j64dCKJwUX-wCSb2M8Xv8ckSc-6WdZvJ8'
            },
            body: JSON.stringify({ title, description, tag })
        });
        const json = await response.json();


        const newNotes = JSON.parse(JSON.stringify(notes))


        //Logic to edit in clint
        for (let index = 0; index < newNotes.length; index++) {
            const element = newNotes[index];
            if (element._id === id) {
                newNotes[index].title = title;
                newNotes[index].description = description;
                newNotes[index].tag = tag;
                break;
            }
        }
        setNotes(newNotes);
    }


    return (
        <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes }}>
            {props.children}
        </NoteContext.Provider>
    )
}


export default NoteState;