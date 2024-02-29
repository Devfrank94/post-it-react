import React, { useState } from "react";
import PostAddIcon from '@mui/icons-material/PostAdd';
import { Fab, Zoom } from "@mui/material";

function CreateArea(props) {

  const [isExpanded, setExpanded] = useState(false);

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
    //  Resetto il form
    setNote({
      title: "",
      content: ""
    });
    //  Prevenire il comportamento di default dell'html (ricaricare la pagina)
    event.preventDefault();
  }

  function expand(){
    setExpanded(true);
  }

  return (
    <div>
      <form>
        {isExpanded ? <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Titolo" /> : null}

        <textarea name="content" onClick={expand} onChange={handleChange} value={note.content} placeholder="Scrivi qui..." rows={isExpanded ? 3 : 1} />
        <Zoom in={isExpanded}>
          <Fab color="primary" aria-label="add" className="button" onClick={submitNote}>
            <PostAddIcon/>
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;