import Todo from "../todo/Todo";
import "./style.css";

function List({ toDos, setToDos }) {
  const removeTodo = (id) => {
    // id값 체크해서 같지 않으면 업데이트해서 지워줌
    let updatedTodos = [...toDos].filter((toDo) => toDo.id !== id);
    setToDos(updatedTodos);
  };
  const editHandler = (id) => {
    const updatedTodos = toDos.map((toDo) => {
      if (toDo.id === id) {
        return {
          ...toDo,
          isDone: !toDo.isDone,
        };
      } else {
        return { ...toDo };
      }
    });

    setToDos(updatedTodos);
  };
  return (
    <div className="list-container">
      <h2 className="list-title">Working.. 🔥</h2>
      <div className="list-wrapper">
        {toDos.map((toDo) => {
          if (!toDo.isDone) {
            return (
              <Todo
                toDo={toDo}
                key={toDo.id}
                isDone={toDo.isDone}
                removeTodo={removeTodo}
                editHandler={editHandler}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
      <h2 className="list-title">Done..! 🎉</h2>
      <div className="list-wrapper">
        {toDos.map((toDo) => {
          if (toDo.isDone) {
            return (
              <Todo
                toDo={toDo}
                key={toDo.id}
                isDone={toDo.isDone}
                removeTodo={removeTodo}
                editHandler={editHandler}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
}

export default List;
