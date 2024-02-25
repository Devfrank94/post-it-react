import React from "react";

function CreateArea() {
  return (
    <div>
      <form>
        <input name="title" placeholder="Titolo" />
        <textarea name="content" placeholder="Scrivi qui..." rows="3" />
        <button>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;