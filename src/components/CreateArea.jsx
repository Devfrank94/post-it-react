import React, { useState } from "react";

function CreateArea(props) {
  // Creo costante che tenga traccia del titolo e del contenuto
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event){

    // Passo la nota creata all' App
    const {name, value} =  event.target;

    setNote(prevNote => {
      return{
        ...prevNote ,[name]: value
      };
    })
  }

  function submitNote(event){
    props.onAdd(note);
    //  Prevenire il comportamento di default dell'html (ricaricare la pagina)
    event.preventDefault();
  }

  return (
    <div>
      <form>
        <input name="title" onChange={handleChange} value={note.title} placeholder="Titolo" />
        <textarea name="content" onChange={handleChange} value={note.content} placeholder="Scrivi qui..." rows="3" />
        <button onClick={submitNote}><span className="material-symbols-outlined">post_add</span></button>
      </form>
    </div>
  );
}

export default CreateArea;