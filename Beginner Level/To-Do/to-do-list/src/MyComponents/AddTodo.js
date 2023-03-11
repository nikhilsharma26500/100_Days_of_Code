import React, { useState } from "react";

export const AddTodo = (props) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const submit= () => {

    }
  return (
    <div className="container my-3">
    <h3>Add a Todo</h3>
      <form onSubmit={props.Ad}>
        <div class="mb-3">
          <label for="title" class="form-label">
            Title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => {
                setTitle(e.target.value);
            }}
            class="form-control"
            id="title"
            aria-describedby="emailHelp"
          />
        </div>
        <div class="mb-3">
          <label for="desc" class="form-label">
            Description
          </label>
          <input
            type="text"
            value={desc}
            onChange={(e) => {
                setDesc(e.target.value);
            }}
            class="form-control"
            id="desc"
          />
        </div>
        <button type="submit" class="btn btn-sm btn-success">
          Add item
        </button>
      </form>
    </div>
  );
};
