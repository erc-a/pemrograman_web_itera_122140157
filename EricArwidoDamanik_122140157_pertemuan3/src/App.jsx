import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { BookProvider } from "./context/BookContext";

import Home from "./pages/Home/Home";
import Stats from "./pages/Stats/Stats";

import "./App.css";

function App() {
  return (
    <Router>
      <BookProvider>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/stats" element={<Stats />} />
          </Routes>
        </div>
      </BookProvider>
    </Router>
  );
}

export default App;