import React, {useState} from "react";
import Note from "./Note";
import CreateArea from "./CreateArea";

function Main() {

  const [notes, setNotes] = useState([]);

  function addNote(newNote){
    setNotes(prevNotes => {
      return[...prevNotes, newNote];
    })
  }

    return (
      <div>
        <CreateArea onAdd={addNote} />
        {notes.map((noteItem, index) => {
          return <Note 
          key={index}
          id={index}
          title={noteItem.title}  
          content={noteItem.content} 
          />
        })}
      </div>
        
      
    );
}
export default Main;