// Header.jsx
import React, { useState } from 'react';
import './Header.css';
import Modal from './Modal.jsx';

function Header() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => setIsModalOpen(true);
    const handleCloseModal = () => setIsModalOpen(false);

    return (
        <header className="header">
            <div className="logo">
                <img src="src/images/PQRSmart-Logo.png" alt="PQRSmart Logo"/>
            </div>
            <nav className="nav">
                <a href="#inicio" className="nav-link">Inicio</a>
                <a href="#como-funciona" className="nav-link">Cómo Funciona</a>
                <a href="#crear-solicitud" className="nav-link" onClick={handleOpenModal}>Crear Solicitud</a>
                <a href="#contacto" className="nav-link">Contacto</a>
                <button className="header-login-btn">Iniciar Sesión</button>
            </nav>
            <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
        </header>
    );
}

export default Header;
