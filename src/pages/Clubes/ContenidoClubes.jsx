import "./clubes.css";
import Card from "./Card";

export default function ContenidoClubes({imgMain}) {
  return (  
  <main>
    <img src={imgMain} alt="" />
    <h1>La Trayectoria de Cristiano Ronaldo en Clubes</h1>
    <p>
      Cristiano Ronaldo ha jugado en algunos de los clubes 
      más importantes del mundo, dejando un legado de goles, 
      títulos y momentos inolvidables en cada uno de ellos.
    </p>
    <br />
    <section className="contenedor-card">
        <Card 
          titulo="Sporting de Lisboa (2002-2003)"
          descripcion1="Ronaldo comenzó su carrera en el Sporting de Lisboa, donde rápidamente llamó la atención por su habilidad y velocidad."
          momentos="En un partido amistoso contra el Manchester United convenció a Sir Alex Ferguson de ficharlo."
          img ="/img/main/clubes/sporting.jpg"
        />
        <Card 
          titulo="Manchester United (2003-2009)"
          descripcion1="Títulos: 3 Premier League, 1 UEFA Champions League, 1 Copa de Europa, Ganó su primer Balón de Oro en 2008."
          momentos="Nos dejo un momento iconico como lo es el gol de falta ante el Portsmouth en 2008."
          img ="/img/main/clubes/manchester1.jpg"
        />
        <Card  
          titulo="Real Madrid (2009-2018)"
          descripcion1="4 UEFA Champions League, 2 La Liga, 2 Copas del Rey y Máximo goleador histórico del Real Madrid con 450 goles."
          momentos="Su bicicleta ante la Juventus en la Champions League 2017-2018."
          img ="public/img/main/clubes/realmadrid.jpg"
        />
        <Card 
          titulo="Juventus (2018-2021)"
          descripcion1="Títulos: 2 Serie A, 1 Copa Italia y fue el primer jugador en ganar títulos de liga en Inglaterra, España e Italia."
          momentos="Su hat-trick ante el Atlético de Madrid en la Champions League 2018-2019."
          img ="/img/main/clubes/juventus.jpg"
        />
        <Card 
          titulo="Manchester United (2021-2022)"
          descripcion1="Regreso triunfal:Ronaldo regresó al Manchester United en 2021, marcando goles importantes en la Premier League y la Champions League."
          momentos="Su hat-trick ante el Toteham en la premier 2021-2022."
          img ="/img/main/clubes/manchester2.jpg"
        />
        <Card 
          titulo="Al-Nassr (2023-actualidad)"
          descripcion1="Nuevo desafío: En 2023, Ronaldo firmó con el Al-Nassr de Arabia Saudita, llevando su talento y experiencia a una nueva liga."
          momentos="Continúa rompiendo récords y demostrando su clase en cada partido."
          img ="/img/main/clubes/alnasser.jpg"
        />
    </section>
  </main>
  )
}
