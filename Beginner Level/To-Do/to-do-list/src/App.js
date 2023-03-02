import "./App.css";
import Header from "./MyComponents/Header";
import Footer from "./MyComponents/Footer";
import ToDos from "./MyComponents/ToDos"

function App() {
  return (
    <>
      <Header title="To-Do List"/>
      <ToDos />
      <Footer />
    </>
  );
}

export default App;
