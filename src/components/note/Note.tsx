import { MdDeleteForever } from "react-icons/md";
import "./note.css";

export default function Notes({id, text, date, handleDeleteNote}: any) {
  return (
    <>
      <div className="note">
        <span>{text}</span>
        <div className="note-footer">
          <small>{date}</small>
          <MdDeleteForever onClick={() => handleDeleteNote(id)} className="delete-icon" size="1.3em" />
        </div>
      </div>
    </>
  );
}
