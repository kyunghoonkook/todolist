import Todo from "../todo/Todo";
import "./style.css";

function List({ toDos, setToDos }) {
  const removeToDo = (id) => {
    // id값 체크해서 같지 않으면 업데이트해서 지워줌
    let updatedToDos = [...toDos].filter((toDo) => toDo.id !== id);
    setToDos(updatedToDos);
  };
  const editHandler = (id) => {
    let updatedToDos = [...toDos].map((toDo) => {
      // todo.id랑 id랑 같으면 idDone은 트루고 ...toDo에 들어감
      //   if (toDo.id === id) {
      //     return {
      //       ...toDo,
      //       isDone: !toDo.isDone,
      //     };
      //     // 아니면 isDone은 false고 배열은 그대로 ... 불변성
      //   } else {
      //     return { ...toDo };
      //   }
      // });
      return { ...toDo, isDone: toDo.id === id ? !toDo.isDone : toDo.isDone };
    });

    setToDos(updatedToDos);
  };
  return (
    <div className={"list-container"}>
      <h2 className="list-title">진행중.. 🔥</h2>
      <div className="list-wrapper">
        {toDos.map((toDo) => {
          // todo.isdone이 true일때 (기본값 false니까) 진행중에 있게
          if (!toDo.isDone) {
            return (
              // Todo한테 데이터 넘겨주기
              <Todo
                toDo={toDo}
                key={toDo.id}
                isDone={toDo.isDone}
                removeToDo={removeToDo}
                editHandler={editHandler}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
      <h2 className="list-title">완료..! 🎉</h2>
      <div className="list-wrapper">
        {toDos.map((toDo) => {
          // false그대로 일때는 완료에 있게
          if (toDo.isDone) {
            return (
              <Todo
                toDo={toDo}
                key={toDo.id}
                isDone={toDo.isDone}
                removeToDo={removeToDo}
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
