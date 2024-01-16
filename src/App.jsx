import Header from "./components/Header";
import Rodape from "./components/Rodape";
import InicioPage from "./pages/InicioPage";
import SobrePage from "./pages/SobrePage";
import SobreMimPage from "./pages/SobreMimPage";
import SobrePretaLabPage from "./pages/SobrePretaLabPage";
import ErrorPage from "./pages/ErrorPage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />

      <div style={{ marginBottom: "130px" }}>
        <Routes>
          {/* aqui serão definidas as rotas */}
          <Route path="/" element={<InicioPage />} />
          <Route path="/sobre">
            <Route index element={<SobrePage />} />
            <Route path="mim" element={<SobreMimPage />} />
            <Route path="pretalab" element={<SobrePretaLabPage />} />
          </Route>
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>

      <Rodape mensagem="Feito por amor por Lis <3" />
    </>
  );
}

export default App;
