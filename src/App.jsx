import { useEffect, useState } from "react";
import Formulario from "./components/Formulario";
import Header from "./components/Header";
import Rodape from "./components/Rodape";
import InicioPage from "./pages/InicioPage";
import SobrePage from "./pages/SobrePage";
import ErrorPage from "./pages/ErrorPage";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
      <Header />

      <div style={{ marginBottom: "130px" }}>
        <Routes>
          {/* aqui serão definidas as rotas */}
          <Route path="/" element={<InicioPage />} />
          <Route path="/sobre" element={<SobrePage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>

      <Rodape mensagem="Feito por amor por Lis <3" />
    </>
  );
}

export default App;
