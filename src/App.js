

import {BrowserRouter as Router} from "react-router-dom"
import Spinner from "./components/Spinner/Spinner"
import MainRouter from './MainRouter';
import './App.css';
import React from "react";


function App() {
  return (
    <div className="App">
      <React.Suspense fallback={<Spinner/>}>
      <Router>
        <MainRouter/>
      </Router>
      </React.Suspense>
    </div>
  );
}

export default App;
