import React, {useEffect} from "react";
import Navbar from "./Navbar";
import Intro from "./Intro";
import History from "./History";
import Skills from "./Skills";
import { createBrowserRouter, RouterProvider } from "react-router-dom";


function App() {
  
  return (
    <div className="App">
      <Navbar/>
      <header className="App-header">
      </header>
      <Intro />
      <History />
      <Skills />
    </div>
  );
}

export default App;
