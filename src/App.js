import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Anime from "./Anime/anime";
import Animes from "./Anime/animes";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Animes />} />
          <Route path="/anime/:id" element={<Anime />} />
        </Routes>
      </Router>
    </div>
  );
}
