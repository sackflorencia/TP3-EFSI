import './Titulo.css'

const Titulo = ({ texto, tipo = "h2" }) => {
  if (tipo === "h1") {
    return <h1>{texto}</h1>
  }

  return <h2>{texto}</h2>
}

export default Titulo