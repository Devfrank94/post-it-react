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

  // Funzione per eliminare nota
    function deleteNote(id){
      setNotes(prevNotes => {
        return prevNotes.filter((noteItem, index) => {
          return index  !== id;
      });
    });
  }

    return (
      <>
        <CreateArea onAdd={addNote} />
      <div className="container">
        {notes.map((noteItem, index) => {
          return <Note 
          key={index}
          id={index}
          title={noteItem.title}  
          content={noteItem.content}
          onDelete={deleteNote}
          />
        })}
      </div>
      </>
        
      
    );
}
export default Main;