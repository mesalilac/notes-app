import Note from "../note/Note";
import "./NotesList.css";

export default function NotesList({notes}: any) {
  
  return (
    <>
      <div className="notes-list">
        {notes.map((note: any) => <Note key={note.id} text={note.text} date={note.date}/>)}
      </div>
    </>
  );
}
