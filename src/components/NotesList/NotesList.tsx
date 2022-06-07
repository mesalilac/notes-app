import AddNote from "../addNote/AddNote";
import Note from "../note/Note";
import "./NotesList.css";

export default function NotesList({notes, handleAddNote, handleDeleteNote}: any) {
  return (
    <>
      <div className="notes-list">
        {notes.map((note: any) => <Note key={note.id} id={note.id} text={note.text} date={note.date} handleDeleteNote={handleDeleteNote}/>)}
        <AddNote handleAddNote={handleAddNote} />
      </div>
    </>
  );
}
