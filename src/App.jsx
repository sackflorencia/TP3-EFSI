import { useState } from 'react'
import './App.css'
import Formulario from './components/Formulario'
import Listado from './components/Listado'
import Titulo from './components/Titulo'

function App() {
  const [listaCitas, setListaCitas] = useState([]);
  const agregarCita = (cita)=>{
    setListaCitas([...listaCitas, cita])
  };
  return (
    <>
      <Titulo texto="ADMINISTRADOR DE PACIENTES" tipo="h1" />

      <div className="container">
        <div className="row">

          <div className="one-half column">
            <Titulo texto="Crear mi Cita" />
            <Formulario agregarCita={agregarCita}/>
          </div>

          <div className="one-half column">
            <Titulo texto="Administra tus citas" />
            <Listado listaCitas={listaCitas}/>
          </div>

        </div>
      </div>
    </>
  )
}

export default App