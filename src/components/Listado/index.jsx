import Cita from "../Cita/index.jsx";
import './Listado.css'

const Listado = ({ listaCitas, pedirEliminar }) => {
    return (<div className="lista-citas">
        {
            listaCitas.map((c, index) => (
                <Cita
                    key={index}
                    cita={c}
                    pedirEliminar={pedirEliminar}
                />
            ))
        }
    </div>)
};
export default Listado;