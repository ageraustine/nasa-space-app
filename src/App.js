import React from "react";
import "./App.css";

import Layout from "./component/Layout";
import {BrowserRouter as Router} from "react-router-dom";

function App() {
  return (
  <React.StrictMode>
    <Router>
        <Layout />
    </Router>
    </React.StrictMode>
  );
}

export default App;