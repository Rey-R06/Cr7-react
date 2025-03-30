import "./header.css"; 
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Header() {
    const [menuAbierto, setMenuAbierto] = useState(false);
    const navigate = useNavigate(); // 📌 Hook para cambiar la página
  
    function toggleMenu() {
      setMenuAbierto(!menuAbierto);
    }

  return (
        <header>
        <img src="/img/header/logo-dorado-cr7.png" alt="logo de cr7" />
        
        {/* Botón Hamburguesa */}
        <button className="menu-hamburguesa" onClick={toggleMenu}>
          ☰
        </button>
  
        {/* Menú de navegación */}
        <nav className={menuAbierto ? "menu abierto" : "menu"}>
                <ul>
                    <li><button onClick={() => navigate("/")}>Inicio</button></li>
                    <li><button onClick={() => navigate("/clubes")}>Clubes</button></li>
                    <li><button onClick={() => navigate("/seleccion")}>Selección</button></li>
                </ul>
            </nav>
        </header>
  )
}
