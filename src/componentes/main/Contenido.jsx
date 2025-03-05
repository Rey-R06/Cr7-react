import imgMain from "../../assets/img/main/contenido-img.png"; // Ruta relativa corregida
import "./contenido.css"; // Ruta relativa desde Header.jsx

export default function Contenido() {
  return (
    <div>
      <main>
        <img src={imgMain} alt="" />
      </main>
    </div>
  )
}
