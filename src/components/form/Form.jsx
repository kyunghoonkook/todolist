import React, { useState } from "react";
import "./style.css";

function Form({ toDos, setToDos }) {
  const initValue = {
    id: "",
    title: "",
    body: "",
    isDone: false,
  };
  const [toDo, setToDo] = useState(initValue);
  // const [style, setStyle] = useState("add-form");

  const changeHandler = (e) => {
    const { value, name } = e.target; // 우선 e.target 에서 name 과 value 를 추출
    setToDo({
      ...toDo, // 기존의 input 객체를 복사한 뒤
      [name]: value, // name 키를 가진 값을 value 로 설정
    });
  };
  // const changeStyle = () => {
  //   setStyle("add-form-change");
  // };

  const handleAddToDo = (e) => {
    e.preventDefault();
    if (toDo.title === "" || toDo.body === "") return;

    // toDo객체를 toDos배열로 id에 1씩 추가
    setToDos([...toDos, { ...toDo, id: Math.random().toString() }]);
    // console.log(toDo);
    setToDo(initValue);
  };

  // const clickHandler = () => {
  //   handleAddToDo();
  //   changeStyle();
  // };
  return (
    <form className="add-form" onSubmit={handleAddToDo}>
      <div className="input-group">
        <label className="form-label">제목</label>
        <input
          type="text"
          className="add-input"
          name="title"
          onChange={changeHandler}
          value={toDo.title}
        />
        <label className="form-label">내용</label>
        <input
          type="text"
          className="add-input"
          name="body"
          onChange={changeHandler}
          value={toDo.body}
        />
        <button className="add-button" type="submit">
          추가하기
        </button>
      </div>
    </form>
  );
}

export default Form;
