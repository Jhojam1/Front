import React from 'react';
import GradientBackground from './GradientBackground'; // Importa el nuevo componente
import './Login.css'; // Importa tu CSS de estilos

const Login = () => {
    return (
        <div>
            <GradientBackground />
            <div className="login-container">
                <div className="login-card">
                    <h2>Iniciar Sesión</h2>
                    <label htmlFor="username">Usuario</label>
                    <input type="text" id="username" placeholder="Ingrese su usuario" />
                    <label htmlFor="password">Contraseña</label>
                    <input type="password" id="password" placeholder="Ingrese su contraseña" />
                    <button className="login-btn">Iniciar Sesión</button>
                    <div className="register-prompt">
                        ¿No tienes cuenta? <a href="/register">Regístrate aquí</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
