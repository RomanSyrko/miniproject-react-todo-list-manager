import React, {useEffect, useState} from 'react';

import Sidebar from "./Components/Sidebar";
import Main from "./Components/Main";
import './App.css'

const App = () => {

    const [notes, setNotes] = useState(
        localStorage.notes ? JSON.parse(localStorage.notes) : []
    );
    const [activeNote, setActiveNote] = useState(0);

    useEffect(() => {
        localStorage.setItem("notes", JSON.stringify(notes));
    }, [notes]);

    const onAddNote = (e) => {
        e.preventDefault()
        const newNote = {
            title: "Name",
            body: "",
            completed: false,
            lastModified: Date.now(),
            id: Math.random() * 1000
        };

        setNotes([newNote, ...notes]);
        setActiveNote(newNote.id);
    };

    const onDeleteNote = (noteId) => {
        setNotes(notes.filter(({id}) => id !== noteId));
    };

    const onCheckNote = (item) => {
        const updateCompleted = notes.map((note) => {
            if (note.id === item.id) {
                return {
                    ...item,
                    completed: !item.completed
                };
            }
            return note;
        });
        setNotes(updateCompleted)
    };

    const onUpdateNote = (updatedNote) => {
        const updatedNotesArr = notes.map((note) => {
            if (note.id === updatedNote.id) {
                return updatedNote;
            }
            return note;
        });
        setNotes(updatedNotesArr);
    };

    const getActiveNote = () => {
        return notes.find(({id}) => id === activeNote);
    };

    return (
        <div className="App">
            <Sidebar
                notes={notes}
                onAddNote={onAddNote}
                onDeleteNote={onDeleteNote}
                activeNote={activeNote}
                setActiveNote={setActiveNote}
                onCheckNote={onCheckNote}
            />
            <Main activeNote={getActiveNote()} onUpdateNote={onUpdateNote}/>
        </div>
    );
};

export default App;