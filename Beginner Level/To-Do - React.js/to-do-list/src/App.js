import "./App.css";
import Header from "./MyComponents/Header";
import { Footer } from "./MyComponents/Footer";
import { ToDos } from "./MyComponents/ToDos";
import { AddTodo } from "./MyComponents/AddTodo";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
  let initTodo;
  if (localStorage.getItem("Todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("Todos"));
  }
  const onDelete = (todo) => {
    console.log("Deleting...", todo);

    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
    localStorage.setItem("Todos", JSON.stringify(todos));
  };

  const addTodo = (title, desc) => {
    console.log("Adding this todo", title, desc);
    let sno;
    if (todos.length === 0) {
      sno = 0;
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    };

    setTodos([...todos, myTodo]);
    console.log(myTodo);
  };

  const [todos, setTodos] = useState(initTodo);

  useEffect(() => {
    localStorage.setItem("Todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div>
  <Router>
    <Header title="To-Do List" searchBar={false} />
    <Switch>
      <Route
        exact
        path="/"
        render={() => {
          return (
            <div>
              <AddTodo addTodo={addTodo} />
              <ToDos todos={todos} onDelete={onDelete} />
            </div>
          );
        }}
      ></Route>
    </Switch>
    <Footer />
  </Router>
</div>

  );
}

export default App;
