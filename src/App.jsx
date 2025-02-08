import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Accueil from "./pages/Accueil";
import Menuiserie from "./pages/Menuiserie";
import TravauxInt from "./pages/TravauxInt";
import TravauxExt from "./pages/TravauxExt";
import Cuisine from "./pages/Cuisine";
import AbrisTerrasse from "./pages/AbrisTerrasse";
import Dressing from "./pages/Dressing";
import HabillageSol from "./pages/HabillageSol";
import MenuiserieExt from "./pages/MenuiserieExt";
import RevetementSol from "./pages/RevetementSol";
import RevetementMurs from "./pages/RevetementMurs";
import SalleDeBain from "./pages/SalleDeBain";
import Mentionslegales from "./pages/Mentionslegales";
import ProjetPersonnalise from "./pages/ProjetPersonnalise";
import Contact from "./pages/ContactPage";
import Avis from "./pages/Avis";
import CGU from "./pages/CGU";
import Confidentialite from "./pages/Confidentialite";

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
          <Route path="/menuiserie/menuiserieExt" element={<MenuiserieExt />} />
          <Route path="/menuiserie/dressing" element={<Dressing />} />
          <Route path="/menuiserie/cuisine" element={<Cuisine />} />
          <Route path="/travauxInt/salleDeBain" element={<SalleDeBain />} />
          <Route
            path="/travauxInt/revetementMurs"
            element={<RevetementMurs />}
          />
          <Route path="/travauxInt/revetementSol" element={<RevetementSol />} />
          <Route path="/travauxExt/abrisTerrasse" element={<AbrisTerrasse />} />
          <Route path="/travauxExt/habillageSol" element={<HabillageSol />} />
          <Route
            path="/travauxExt/projetPersonnalise"
            element={<ProjetPersonnalise />}
          />
          <Route path="/mentionslegales" element={<Mentionslegales />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/avis" element={<Avis />} />
          <Route path="/CGU" element={<CGU />} />
          <Route path="/confidentialite" element={<Confidentialite />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
