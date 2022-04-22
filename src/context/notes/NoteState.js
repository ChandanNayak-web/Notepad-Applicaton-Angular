import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {


    const notesInitial = [
        {
            "_id": "62613c9a77d5f5de060b53cf",
            "user": "6260041f8ed5221e7adc66a9",
            "title": "my title",
            "description": "please concentrate on your study don't divert",
            "tag": "personal",
            "date": "2022-04-21T11:14:34.577Z",
            "__v": 0
        },
        {
            "_id": "6262253d799320b1c925897e",
            "user": "6260041f8ed5221e7adc66a9",
            "title": "my title",
            "description": "please concentrate on your study don't divert",
            "tag": "personal",
            "date": "2022-04-22T03:47:09.280Z",
            "__v": 0
        },
        {
            "_id": "62613c9a77d5f5de060b53cf",
            "user": "6260041f8ed5221e7adc66a9",
            "title": "my title",
            "description": "please concentrate on your study don't divert",
            "tag": "personal",
            "date": "2022-04-21T11:14:34.577Z",
            "__v": 0
        },
        {
            "_id": "6262253d799320b1c925897e",
            "user": "6260041f8ed5221e7adc66a9",
            "title": "my title",
            "description": "please concentrate on your study don't divert",
            "tag": "personal",
            "date": "2022-04-22T03:47:09.280Z",
            "__v": 0
        },
        {
            "_id": "62613c9a77d5f5de060b53cf",
            "user": "6260041f8ed5221e7adc66a9",
            "title": "my title",
            "description": "please concentrate on your study don't divert",
            "tag": "personal",
            "date": "2022-04-21T11:14:34.577Z",
            "__v": 0
        },
        {
            "_id": "6262253d799320b1c925897e",
            "user": "6260041f8ed5221e7adc66a9",
            "title": "my title",
            "description": "please concentrate on your study don't divert",
            "tag": "personal",
            "date": "2022-04-22T03:47:09.280Z",
            "__v": 0
        }
    ]


    const [notes, setNotes] = useState(notesInitial)


    return (
        <NoteContext.Provider value={{ notes, setNotes }}>
            {props.children}
        </NoteContext.Provider>
    )
}


export default NoteState;