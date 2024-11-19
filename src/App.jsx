import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Accueil from "./pages/Accueil";
import Menuiserie from "./pages/Menuiserie";
import TravauxInt from "./pages/TravauxInt";
import TravauxExt from "./pages/TravauxExt";
import Mentionslegales from "./pages/Mentionslegales";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Accueil />} />
          <Route path="/" element={<Accueil />} />
          <Route path="/menuiserie" element={<Menuiserie />} />
          <Route path="/travauxInt" element={<TravauxInt />} />
          <Route path="/travauxExt" element={<TravauxExt />} />
          <Route path="/mentionslegales" element={<Mentionslegales />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
