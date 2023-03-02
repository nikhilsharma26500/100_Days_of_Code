import "./App.css";
import Header from "./MyComponents/Header";
import {Footer} from "./MyComponents/Footer";
import {ToDos} from "./MyComponents/ToDos"

function App() {
  const onDelete = () => {
    console.log("Deleting...");
  }
  let todos = [{
    sno: 1,
    title: "Go to the market",
    desc: "Go to the market to get this thing done"
  }
  , {
    sno: 2,
    title: "Go to the school",
    desc: "Go to the school to get this thing done"
  }
  , {
    sno: 3,
    title: "Go to the home",
    desc: "Go to the home to get this thing done"
  }]
  return (
    <>
      <Header title="To-Do List" searchBar = {true}/>
      <ToDos todos={todos} onDelete={onDelete}/>
      <Footer />
    </>
  );
}

export default App;
