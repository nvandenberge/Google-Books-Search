import React from "react";
import { HashRouter as Router } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Header from './components/Header/Header';
import Form from "./components/Form/Form";

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Header />
        <Form />
      </div>
    </Router>
  );
}

export default App;
