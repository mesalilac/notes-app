import { MdDeleteForever } from "react-icons/md";
import "./note.css";

export default function Notes() {
  return (
    <>
      <div className="note">
        <span>this is a note</span>
        <div className="note-footer">
          <small>9/8/2021</small>
          <MdDeleteForever className="delete-icon" size="1.3em" />
        </div>
      </div>
    </>
  );
}
