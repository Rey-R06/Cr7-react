import { useState } from "react";
import "./index.css"; 
import "./responsive.css"; 
import Footer from "./componentes/Footer/Footer"
import Header from "./componentes/Header/Header"
import Contenido from "./componentes/main/Contenido"


function App() {
  // Estado para manejar el contenido dinámico
  const [contenidoMain, setContenidoMain] = useState(
    <Contenido imgMain={"/img/main/principal/img-main.jpg"} />
  );

  return (
    <>
      <Header cr7Logo={"/img/header/logo-dorado-cr7.png"} setContenidoMain={setContenidoMain} />
      {contenidoMain}
      <Footer />
    </>
  );
}

export default App
