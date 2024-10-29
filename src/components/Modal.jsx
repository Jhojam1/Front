// Modal.jsx
import React from 'react';
import './Modal.css';

function Modal({ isOpen, onClose }) {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <h2>Acción requerida</h2>
                <p>Para crear una solicitud debes iniciar sesión. Si no tienes cuenta, regístrate.</p>
                <button className="modal-close-btn" onClick={onClose}>Cerrar</button>
            </div>
        </div>
    );
}

export default Modal;
