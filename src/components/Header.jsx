// Header.jsx
import React from 'react';
import './Header.css';

function Header() {
    return (
        <header className="header">
            <div className="logo">
                <img src="src/images/PQRSmart-Logo.png" alt="PQRSmart Logo"/>
            </div>
            <nav className="nav">
            <a href="#inicio" className="nav-link">Inicio</a>
                <a href="#como-funciona" className="nav-link">Cómo Funciona</a>
                <a href="#crear-solicitud" className="nav-link">Crear Solicitud</a>
                <a href="#contacto" className="nav-link">Contacto</a>
                <button className="header-login-btn">Iniciar Sesión</button>
            </nav>
        </header>
    );
}

export default Header;
