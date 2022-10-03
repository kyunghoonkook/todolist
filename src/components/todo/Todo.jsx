import "../list/List";
import "./style.css";
function Todo({ toDo, removeTodo, editHandler }) {
  console.log(toDo);
  return (
    <div className="todo-container">
      <div>
        <h2 className="todo-title">{toDo.title}</h2>
        <div>{toDo.body}</div>
      </div>
      <div className="button-set">
        <button
          className="todo-delete-button button"
          onClick={() => removeTodo(toDo.id)}
        >
          삭제하기
        </button>
        <button
          className="todo-complete-button button"
          onClick={() => editHandler(toDo.id)}
        >
          {toDo.isDone ? "취소" : "완료"}
        </button>
      </div>
    </div>
  );
}

export default Todo;
