import './Cita.css'
const Cita =({cita, pedirEliminar})=>{
    return (
    <div className="cita">
        <p>Mascota: <span>{cita.mascota}</span></p>
        <p>Dueño: <span>{cita.propietario}</span></p>
        <p>Fecha: <span>{cita.fecha}</span></p>
        <p>Hora: <span>{cita.hora}</span></p>
        <p>Sintomas: <span>{cita.sintomas}</span></p>
        <button className="button eliminar u-full-width"
        onClick={() => pedirEliminar(cita)}>
                Eliminar ×
        </button>
    </div>
    );
};
export default Cita;