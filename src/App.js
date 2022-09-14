import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import "./style/page/index.scss";
import Home from "./screen/home";
import LaunchPad from "./screen/launchpad";

function App() {
  return (
    <div classNameName="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/launchpad" element={<LaunchPad />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
