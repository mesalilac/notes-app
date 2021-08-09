import { useState } from 'react';
import '../note/note.css'
import './AddNote.css'

export default function AddNote({handleAddNote}: any) {
  const [noteText, setNoteText] = useState('')
  const characterLimit = 200

  function handleSaveClick(event: any) {
    if (noteText.trim().length > 0) {
      handleAddNote(noteText)
      setNoteText("")
    }
    
  }

  function handleChange(event: any) {
    if (characterLimit - event.target.value.length >= 0) {
      setNoteText(event.target.value)
    }
  }  

  return (
    <>
      <div className="note add-new-note">
        <textarea 
          cols={10} 
          rows={8} 
          value={noteText}
          placeholder="type to add a note"
          onChange={handleChange}
        />
          
        <div className="note-footer">
          <small>{characterLimit - noteText.length} Remaining</small>
          <button className="save-button" onClick={handleSaveClick}>Save</button>
        </div>
      </div>
    </>
  );
}
