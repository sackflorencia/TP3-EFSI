import { useState } from 'react';
import './Formulario.css'

const Formulario = ({agregarCita})=>{
    const ingresar = (event) => {
    event.preventDefault();
    const formulario = event.target;

    const nuevaCita = {
        mascota: formulario.mascota.value,
        propietario: formulario.propietario.value,
        fecha: formulario.fecha.value,
        hora: formulario.hora.value,
        sintomas: formulario.sintomas.value
    };

    agregarCita(nuevaCita);
};
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