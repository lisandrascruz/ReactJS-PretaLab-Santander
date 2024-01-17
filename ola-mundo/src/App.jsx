import Header from "./components/Header";
import Rodape from "./components/Rodape";
import ContadorPage from "./pages/ContadorPage";
import { Route, Routes } from "react-router-dom";
import InicioPage from "./pages/InicioPage";
import ErrorPage from "./pages/ErrorPage";

function App() {
  return (
    <>
      <Header />

      <div style={{ marginBottom: "130px" }}>
        <Routes>
          <Route path="/" element={<InicioPage />} />
          <Route path="/contador" element={<ContadorPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>

      <Rodape mensagem="Feito por amor por Lis <3" />
    </>
  );
}

export default App;
