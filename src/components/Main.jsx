import React from "react";
import Note from "./Note";
import notes from "../notes";

console.log(notes);

function createNote(note){
  return (<Note 
  key={note.id}
  title={note.title}
  content={note.content}
  />

  )
}

function Main() {
    return (
      <main>
        {notes.map((createNote))}
      </main>
      

    );
}
export default Main;