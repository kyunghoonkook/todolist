import React, { useState } from "react";
import List from "../list/List";
import "./style.css";
let num = 1;
function Form() {
  const initValue = {
    id: num,
    title: "",
    body: "",
    isDone: false,
  };
  const [toDo, setToDo] = useState(initValue);
  const [style, setStyle] = useState("add-form");
  const [toDos, setToDos] = useState([]);
  const changeHandler = (e) => {
    const { value, name } = e.target; // 우선 e.target 에서 name 과 value 를 추출
    setToDo({
      ...toDo, // 기존의 input 객체를 복사한 뒤
      [name]: value, // name 키를 가진 값을 value 로 설정
    });
  };
  const changeStyle = () => {
    setStyle("add-form-change");
  };

  const handleAddToDo = () => {
    if (toDo.title === "" || toDo.body === "") return;

    // toDo객체를 toDos배열로 id에 1씩 추가
    setToDos([...toDos, { ...toDo, id: num++ }]);
    // console.log(toDo);
    setToDo(initValue);
  };

  const ClickHandler = () => {
    handleAddToDo();
    changeStyle();
  };
  return (
    <form className={style}>
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
        <button className="add-button" onClick={ClickHandler} type="button">
          추가하기
        </button>
      </div>

      <List toDos={toDos} setToDos={setToDos} style={style} />
    </form>
  );
}

export default Form;
