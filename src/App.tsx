import NotesList from "./components/NotesList/NotesList";
import Search from "./components/search/Search";
import Header from "./components/Header/Header"
import "./app.css";
import { useState } from "react";
import { nanoid } from "nanoid" 

/*
  TODO:
    add title to note

  TODO:
    search by note
*/

export default function App() {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "this is the note number 1",
      date: "9/8/2021"
    },
    {
      id: nanoid(),
      text: "this is the note number 2",
      date: "10/8/2021"
    },
    {
      id: nanoid(),
      text: "this is the note number 3",
      date: "11/8/2021"
    },
    {
      id: nanoid(),
      text: "this is the note number 4",
      date: "12/8/2021"
    }
  ]);
  const [searchText, setSearchText] = useState('')

  function addNote(text: string) {
    const date = new Date()
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString()
    }
    const newNotes = [...notes, newNote]
    setNotes(newNotes)

  }

  function deleteNote(id: string) {
    const newNotes = notes.filter(note => note.id !== id)
    setNotes(newNotes)
  }

  return (
    <div className="container">
      <Header />
      <Search 
        handleSearchNote={setSearchText}
      />
      <NotesList 
        notes={notes.filter(note => note.text.toLowerCase().includes(searchText))}
        handleDeleteNote={deleteNote} 
        handleAddNote={addNote}
      />
    </div>
  );
}
