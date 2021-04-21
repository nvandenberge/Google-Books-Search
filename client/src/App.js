import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Header from './components/Header/Header';
import Search from './pages/Search';

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Header />
        <Route exact path={["/", "/search"]} component={Search} />
      </div>
    </Router>
  );
}

export default App;
