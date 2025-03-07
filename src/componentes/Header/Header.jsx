import "./header.css"; // Ruta relativa desde Header.jsx

export default function Header({cr7Logo}) {
  return (
        <header>
            <img src={cr7Logo} alt="logo de cr7" />
            <nav>
                <ul>
                    <li>Clubes</li>
                    <li>Seleccion</li>
                </ul>
            </nav>
        </header>
  )
}
