import React from "react";
import Note from "./Note";
import notes from "../notes";

console.log(notes);

function createNote(note){
  return (<Note 
  key={note.key}
  title={note.title}
  content={note.content}
  />

  );
}

function Main() {
    return (
      <div>
        {notes.map((createNote))}
      </div>
        
      
    );
}
export default Main;