import { MdDeleteForever } from "react-icons/md";
import "./note.css";

export default function Notes({text, date}: any) {
  return (
    <>
      <div className="note">
        <span>{text}</span>
        <div className="note-footer">
          <small>{date}</small>
          <MdDeleteForever className="delete-icon" size="1.3em" />
        </div>
      </div>
    </>
  );
}
