import React from "react";
import Note from "./Note";
import notes from "../notes";
import CreateArea from "./CreateArea";

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
        <CreateArea />
        {notes.map((createNote))}
      </div>
        
      
    );
}
export default Main;