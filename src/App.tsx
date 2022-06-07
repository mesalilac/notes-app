import NotesList from "./components/NotesList/NotesList";
import Search from "./components/search/Search";
import Header from "./components/Header/Header"
import "./app.css";
import { useState, useEffect } from "react";
import { nanoid } from "nanoid" 

/*
  TODO:
    add title to note

  TODO:
    search by note

  TODO:
    change styles
*/

export default function App() {
  const [notes, setNotes] = useState([]);
  const [searchText, setSearchText] = useState('')

  useEffect(() => {
    const localStorageData = localStorage.getItem("notes-data")
    const savedNotes = JSON.parse(localStorageData)

    if (savedNotes) {
      setNotes(savedNotes)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("notes-data", JSON.stringify(notes))
  }, [notes])

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
