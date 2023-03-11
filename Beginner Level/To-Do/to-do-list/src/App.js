import "./App.css";
import Header from "./MyComponents/Header";
import {Footer} from "./MyComponents/Footer";
import {ToDos} from "./MyComponents/ToDos";
import { AddTodo } from "./MyComponents/AddTodo";
import React, {useState} from "react";

function App() {
  const onDelete = (todo) => {
    console.log("Deleting...", todo);

    setTodos(todos.filter((e) => {
      return e != todo;
    }))
  }

  const [todos, setTodos] = useState([
    {
      sno: 1,
      title: "Go to the market",
      desc: "Go to the market to get this thing done"
    }, 
    {
      sno: 2,
      title: "Go to the school",
      desc: "Go to the school to get this thing done"
    }, 
    {
      sno: 3,
      title: "Go to the home",
      desc: "Go to the home to get this thing done"
    }]
  );

  return (
    <div>
      <Header title="To-Do List" searchBar = {true}/>
      <AddTodo/>
      <ToDos todos={todos} onDelete={onDelete}/>
      <Footer />
    </div>
  );
}

export default App;
