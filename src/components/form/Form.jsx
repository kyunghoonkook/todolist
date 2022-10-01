import React, { useState } from "react";
import "./style.css";

function Form() {
  const state = {
    id: 0,
    title: "",
    body: "",
    isDone: false,
  };
  const [toDo, setToDo] = useState(state);
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (toDo.title === "" || toDo.body === "") return;
    setToDo("");
    setToDos((curr) => [toDo, ...curr]);
    // sdafas
  };
  console.log(toDos);
  return (
    <form className="add-form" onSubmit={onSubmitHandler}>
      <div className="input-group">
        <label className="form-label">제목</label>
        <input
          type="text"
          className="add-input"
          name="title"
          onChange={onChange}
          value={toDo.title}
        />
        <label className="form-label">내용</label>
        <input
          type="text"
          className="add-input"
          name="body"
          onChange={onChange}
          value={toDo.body}
        />
      </div>

      <button className="add-button">추가하기</button>
    </form>
  );
}

export default Form;
