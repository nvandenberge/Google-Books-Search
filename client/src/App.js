import React from "react";
import { HashRouter as Router } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Header from './components/Header/Header';

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Header />
      </div>
    </Router>
  );
}

export default App;
