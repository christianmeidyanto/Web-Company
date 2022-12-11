import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "font-awesome/css/font-awesome.min.css";
import $ from "jquery";
import Popper from "popper.js";
import Navigate from "./Component/Nav/Navigate";
import Hero from "./Component/Hero/Hero";

function App() {
  return (
    <div className="container-fluid">
      <Navigate />
      <Hero />
    </div>
  );
}

export default App;
