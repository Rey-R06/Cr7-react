import "./header.css"; 

export default function Header({cr7Logo, onPageSelect}) {

  return (
        <header>
            <img src={cr7Logo} alt="logo de cr7" />
            <nav>
                <ul>
                    <li><button onClick={onPageSelect}>Clubes</button></li>
                    <li><button onClick={onPageSelect}>Seleccion</button></li>
                </ul>
            </nav>
        </header>
  )
}
