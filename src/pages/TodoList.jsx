import React, { useState } from "react";
import Layout from "../components/layout/Layout";
import Header from "../components/header/Header";
import List from "../components/list/List";
import Form from "../components/form/Form";

function TodoList() {
  // 데이터를 넘기려면 상위로 넘겨준다 Form -> TodoList
  const [toDos, setToDos] = useState([]);
  return (
    <Layout>
      <Header />
      <Form toDos={toDos} setToDos={setToDos} />
      {/* 다시 뿌려주기 */}
      <List toDos={toDos} setToDos={setToDos} />
    </Layout>
  );
}

export default TodoList;
