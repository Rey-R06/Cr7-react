export default function Card({titulo, descripcion1, momentos, img}) {
  return (
    <div className="card">
        <h2>{titulo}</h2>
        <img src={img} alt="" />
        <p>{descripcion1}</p>
        <p>{momentos}</p>
    </div>
  )
}
