import React, { useState } from "react";
import "./style.css";

let num = 0;
function Form() {
  const initValue = {
    id: 0,
    title: "",
    body: "",
    isDone: false,
  };
  const [toDo, setToDo] = useState(initValue);
  const [toDos, setToDos] = useState([]);
  const onChange = (key, value) => setToDo({ ...toDo, [key]: value });
  // []를 해줘야 쓸 수 있음 [key]:value를 toDo 배열에 넣음
  console.log(toDo);

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (toDo.title === "" || toDo.body === "") return;
    setToDos([...toDos, { ...toDo, id: num }]);
    setToDo(initValue);
    num++;
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
          onChange={(event) => onChange("title", event.target.value)}
          value={toDo.title}
        />
        <label className="form-label">내용</label>
        <input
          type="text"
          className="add-input"
          name="body"
          onChange={(event) => onChange("body", event.target.value)}
          value={toDo.body}
        />
      </div>

      <button className="add-button">추가하기</button>
      <ul>
        {toDos.map((todo) => {
          return <li>{todo.title}</li>;
        })}
      </ul>
    </form>
  );
}

export default Form;
