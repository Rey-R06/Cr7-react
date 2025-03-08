import "./header.css"; 
import Contenido from "../main/Contenido";
import ContenidoSeleccion from "../../pages/Seleccion/ContenidoSeleccion";
import ContenidoClubes from "../../pages/Clubes/ContenidoClubes";

export default function Header({cr7Logo, setContenidoMain}) {

  return (
        <header>
            <img src={cr7Logo} alt="logo de cr7" />
            <nav>
                <ul>
                    <li><button onClick={() => setContenidoMain(<Contenido imgMain={"/img/main/principal/img-main.jpg"} />)}>Home</button></li>
                    <li><button onClick={() => setContenidoMain(<ContenidoClubes imgMain={"/img/main/clubes/cr7-main.png"} />)}>Clubes</button></li>
                    <li><button onClick={() => setContenidoMain(<ContenidoSeleccion imgMain={"/img/main/selecciones/cr7-portugalmain.jpg"} />)}>Selección</button></li>
                </ul>
            </nav>
        </header>
  )
}
