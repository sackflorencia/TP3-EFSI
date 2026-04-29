import './Modal.css'
const Modal = ({ visible, onConfirmar, onCancelar }) => {
  if (!visible) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <p>¿Seguro que querés eliminar esta cita?</p>

        <button onClick={onConfirmar}>
          Sí, eliminar
        </button>

        <button onClick={onCancelar}>
          Cancelar
        </button>
      </div>
    </div>
  );
};

export default Modal;