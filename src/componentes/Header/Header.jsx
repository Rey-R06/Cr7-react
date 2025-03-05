import cr7Logo from "../../assets/img/header/logo-CR7.png"; // Ruta relativa corregida
import "./header.css"; // Ruta relativa desde Header.jsx

export default function Header() {
  return (
    <div>
        <header>
            <img src={cr7Logo} alt="logo de cr7" />
            <nav>
                <ul>
                    <li>Clubes</li>
                    <li>Seleccion</li>
                </ul>
            </nav>
        </header>
    </div>
  )
}
