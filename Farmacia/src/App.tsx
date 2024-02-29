import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import Navbar from "./components/navBar/NavBar";
import FormularioCategoria from "./components/Categoria/FormularioCategoria/FormularioCategoria";
import ListaCategorias from "./components/Categoria/listaCategoria/ListaCategorias";
import DeletarCategoria from "./components/Categoria/deletarTema/DeletarTema";

function App() {
  return (
    <>
        <BrowserRouter>
          <Navbar />
          <div className='min-h-[80vh]'>
            <Routes>
              
              <Route path="/home" element={<Home />} />
              <Route path="/categorias" element={<ListaCategorias />} />
              <Route path="/cadastroCategoria" element={<FormularioCategoria />} />
              <Route path="/editarCategoria/:id" element={<FormularioCategoria />} />
              <Route path="/deletarCategoria/:id" element={<DeletarCategoria />} />
              
              
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
    </>
  );
}
export default App;