import Todo from "../todo/Todo";
import "./style.css";

function Form() {
  return (
    <div className="list-container">
      <h2 className="list-title">Working.. 🔥</h2>
      <div className="list-wrapper">
        <Todo />
      </div>
      <h2 className="list-title">Done..! 🎉</h2>
      <div className="list-wrapper"></div>
    </div>
  );
}

export default Form;
