import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Navbar from "components/Navbar";
import Home from "pages/Home";
import CadastrarPacote from "pages/CadastrarPacote";
import CadastrarUsuario from "pages/CadastrarUsuario";

import Logar from "pages/Logar";
import Atendimento from "pages/Atendimento";
import Pacotes from "pages/Pacote";
import Footer from "components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pacote" element={<Pacotes />} />
        <Route path="/cadastrar" element={<CadastrarPacote />} />
        <Route path="/usuario" element={<CadastrarUsuario />} />
        <Route path="/usuario_logado" element={<Logar />} />
        <Route path="/atendimento" element={<Atendimento />} />  
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
