import "./Header.css"

export default function Header({notes, handleAddNote, handleDeleteNote}: any) {
  return (
    <>
      <div className="header">
        <h1>Notes</h1>
        {/* <button className="toggle-button">toggle mode</button> */}
      </div>
    </>
  );
}
