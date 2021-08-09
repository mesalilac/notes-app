import Note from "../note/Note";
import "./NotesList.css";

export default function NotesList() {
  return (
    <>
      <div className="notes-list">
        <Note />
        <Note />
        <Note />
        <Note />
      </div>
    </>
  );
}
