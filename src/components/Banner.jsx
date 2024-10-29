// Banner.jsx
import './Banner.css';

function Banner() {
    return (
        <section className="banner">
            <h1 className="banner-title">Bienvenido al Sistema PQRSmart</h1>
            <p className="banner-description">Tu Gestion Nuestra Prioridad.</p>
            <p className="banner-description">Crea Tu Solicitud AQUI.</p>
            <button className="primary-btn">Crear Solicitud</button>
        </section>
    );
}

export default Banner;
