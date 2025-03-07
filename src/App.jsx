import { useState } from "react";
import Footer from "./componentes/Footer/Footer"
import Header from "./componentes/Header/Header"
import Contenido from "./componentes/main/Contenido"
import ContenidoClubes from "./pages/Clubes/ContenidoClubes"

function App() {
  // Estado para manejar el contenido dinámico
  let [contenidoMain, setContenidoMain] = useState(
    <Contenido imgMain={"/img/main/principal/img-main.jpg"} />
  );

  function pageClubes() {
    setContenidoMain(
      <ContenidoClubes imgMain={"/img/main/clubes/cr7-main.png"} />
    );
  }

  return (
    <>
      <Header cr7Logo={"/img/header/logo-dorado-cr7.png"} onPageSelect={pageClubes} />
      {contenidoMain}
      <Footer />
    </>
  );
}

export default App
