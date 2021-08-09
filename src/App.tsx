import NotesList from "./components/NotesList/NotesList";
import "./app.css";
import { useState } from "react";
import { nanoid } from "nanoid" 

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

  return (
    <div className="container">
      <NotesList notes={notes}/>
    </div>
  );
}
