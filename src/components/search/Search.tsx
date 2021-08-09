import { MdSearch } from "react-icons/md";
import "./Search.css"

export default function Search({handleSearchNote}: any) {
  return (
    <>
      <div className="search">
        <MdSearch className="search-icon" size="1.3em"/>
        <input 
          onChange={(event) => handleSearchNote(event.target.value)}
          type="text" 
          placeholder="type to search for a note"
        />
      </div>
    </>
  );
}