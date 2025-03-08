import "./contenido.css";  

export default function Contenido({imgMain}) {
  return (
      <main>
        <img src={imgMain} alt="" />
        <h1>Cristiano Ronaldo: El Fenómeno del Fútbol Moderno</h1>
        <p>
          Cristiano Ronaldo dos Santos Aveiro, conocido como CR7,
          es uno de los futbolistas más icónicos y exitosos de todos 
          los tiempos. Con una carrera llena de récords, títulos y momentos 
          inolvidables, Ronaldo ha dejado una marca imborrable en la historia 
          del fútbol.
        </p>
        <br />
        <p>
          Considerado con frecuencia el mejor futbolista y el más completo, 
          es el mayor goleador de todos los tiempos en partidos oficiales, y 
          sin duda uno de los mejores de todos los tiempos. Es uno de los 
          futbolistas más laureados de la historia, habiendo ganado, entre otras 
          distinciones, cinco veces el Balón de Oro, cinco premios de la FIFA al mejor 
          jugador del mundo y cuatro Botas de Oro. Obtuvo también los premios The Best 
          FIFA en 2016 y 2017. Además, forma parte del Dream Team del Balón de Oro.
          También fue el primer ganador del premio Premio Puskás en 2009.
        </p>
        <section className="datos">
          <article>
              <p>
                  -Cristiano Ronaldo dos Santos Aveiro.
              </p>
              <p>
                  -Nacido el 5 de febrero de 1985.
              </p>
              <p>
                  -Lugar de nacimiento: Funchal, Madeira, Portugal.
              </p>
              <p>
                  -Altura: 1.87 m.
              </p>
              <p>
                  -Posición: Delantero.
              </p>
          </article>
          <article>
              <p>  
                  -5 veces ganador del Balón de Oro.
              </p>
              <p>
                  -5 veces campeón de la UEFA Champions League.
              </p>
              <p>
                  -Máximo goleador de la historia.
              </p>
              <p>
                  -Máximo goleador histórico de la UEFA Champions League.
              </p>
              <p>
                  -Máximo goleador histórico de la selección portuguesa.
              </p>
          </article>
        </section>
        <h2 className="frase-iconica">
        "Tu amor me hace fuerte, tu odio me hace imparable." - Cristiano Ronaldo.
        </h2>
      </main>
  )
}
