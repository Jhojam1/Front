import React, { useEffect } from 'react';
import './Login2.css'; // Importa tu CSS de estilos

const Login2 = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = '/Gradient.js'; // Ruta directa al archivo en public
        script.async = true;
        document.body.appendChild(script);

        script.onload = () => {
            // Inicializar el gradiente una vez que el script haya cargado
            const gradient = new Gradient();
            gradient.initGradient('#gradient-canvas');
        };

        // Cleanup function to remove the script when the component unmounts
        return () => {
            document.body.removeChild(script);
        };
    }, []); // Dependencias vacías para que se ejecute solo una vez al montar

    return (
        <div>
            <canvas
                id="gradient-canvas"
                style={{ width: '100vw', height: '100vh', position: 'absolute', zIndex: -1 }}
            ></canvas>
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

export default Login2;
