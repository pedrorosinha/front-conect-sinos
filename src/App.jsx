import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Feed from "./pages/Feed/Feed";
/*import Perfil from "./pages/Perfil"; // Criar depois
import Feed from "./pages/Feed";
import Repositorios from "./pages/Repositorios"; // Criar depois
import Sinosflix from "./pages/Sinosflix"; // Já criado*/

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/feed" element={<Feed />} />
        {/*<Route path="/perfil" element={<Perfil />} />
        <Route path="/repositorios" element={<Repositorios />} />
        <Route path="/sinosflix" element={<Sinosflix />} />
        {/* Rota fallback opcional */}
        <Route path="*" element={<div>Página não encontrada</div>} />
      </Routes>
    </Router>
  );
};

export default App;
