import { useState } from 'react';
import './Formulario.css'

const Formulario = ({agregarCita})=>{
    const [datos, setDatos] = useState([])
    const ingresar = (event)=>{
        const formulario = event.target
        event.preventDefault()
        setDatos(
            {
                mascota: formulario.mascota,
                propietario: formulario.propietario,
                fecha: formulario.fecha,
                hora: formulario.hora,
                sintomas: formulario.sintomas
            }
        )
        agregarCita(datos);
    }
    return (
    <form onSubmit={(e) => ingresar(e)}>
        <label>Nombre Mascota</label>
        <input type="text" name="mascota" className="u-full-width" placeholder="Nombre Mascota" />
        <label>Nombre Dueño</label>
        <input type="text" name="propietario" className="u-full-width" placeholder="Nombre dueño de la mascota"/> 
        <label>Fecha</label>
        <input type="date" name="fecha" className="u-full-width" />
        <label>hora</label>
        <input type="time" name="hora" className="u-full-width" />
        <label>Sintomas</label>
        <textarea name="sintomas" className="u-full-width"></textarea>
        <button type="submit" className="u-full-width button-primary">Agregar Cita</button>
    </form>
    );
}

export default Formulario;