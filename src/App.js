import React from "react";
import "./App.css";
import Header from "./components/Header";
import Navigation from "./components/Sidebar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./screens/Home";


function App() {
  return (
    <BrowserRouter>
      <div className="main_content">
        <Header />
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

