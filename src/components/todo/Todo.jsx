import "../list/List";
import "./style.css";
function Todo({ toDo, removeToDo, editHandler }) {
  return (
    <div className="todo-container">
      <div>
        <h2 className="todo-title">{toDo.title}</h2>
        <div>{toDo.body}</div>
      </div>
      <div className="button-set">
        <button
          className="todo-delete-button button"
          onClick={() => removeToDo(toDo.id)}
        >
          삭제하기
        </button>
        <button
          className="todo-complete-button button"
          onClick={() => editHandler(toDo.id)}
        >
          {!toDo.isDone ? "완료" : "취소"}
        </button>
      </div>
    </div>
  );
}

export default Todo;
