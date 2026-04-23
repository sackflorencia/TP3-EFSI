import Cita from "../Cita/index.jsx";
import './Listado.css'

const Listado = ({listaCitas})=>{
    return (<div className="lista-citas">
        {
            listaCitas.map(
                c=>(
                <Cita
                    cita={c}
                />
                )
            )
        }
    </div>)
};
export default Listado;