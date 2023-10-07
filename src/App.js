import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Component } from "react";
import "./App.css";
import HomePage from "./pages/HomePage";
import Header from "./component/Header";
import GamePage from "./pages/GamePage";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/game" element={<GamePage />} />
        </Routes>
      </Router>
    );
  }
}

export default App;
