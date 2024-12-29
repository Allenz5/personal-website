import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from "react";
import Intro from "./pages/intro.jsx"
import Eom from "./pages/eom.jsx"
import Orpheus from "./pages/orpheus.jsx"
import Tripo from "./pages/tripo.jsx"
import Dreamin from "./pages/dreamin.jsx"

function App() {
  return (
    <Router basename="/personal-website">
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/eom" element={<Eom />} />
        <Route path="/orpheus" element={<Orpheus />} />
        <Route path="/tripo" element={<Tripo />} />
        <Route path="/dreamin" element={<Dreamin />} />
      </Routes>
    </Router>
  );
}

export default App;
