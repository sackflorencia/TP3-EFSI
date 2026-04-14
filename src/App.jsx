import './App.css'
import Formulario from './components/Formulario'
import Listado from './components/Listado'
import Titulo from './components/Titulo'

function App() {
  return (
    <>
      <Titulo texto="ADMINISTRADOR DE PACIENTES" tipo="h1" />

      <div className="container">
        <div className="row">

          <div className="one-half column">
            <Titulo texto="Crear mi Cita" />
            <Formulario />
          </div>

          <div className="one-half column">
            <Titulo texto="Administra tus citas" />
            <Listado />
          </div>

        </div>
      </div>
    </>
  )
}

export default App