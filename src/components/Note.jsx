import React from "react";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { Fab, Zoom } from "@mui/material";


function Note(props) {
    return (
      <div className="note">
        <h1>{props.title}</h1>
        <p>{props.content}</p>
        <Zoom in={true}>
          <Fab color="primary" aria-label="add" className="button" onClick={()=>{props.onDelete(props.id);}}>
            <DeleteForeverIcon/>
          </Fab>
        </Zoom>
      </div>
    );
}
export default Note;