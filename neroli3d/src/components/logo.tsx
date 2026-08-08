import logoImage from "../assets/neroli_logo.webp";
import "./components_css/logo.css";
import NavButton from "./nav_button.tsx";
import "./components_css/main_page.css";

function Logo() {
  return (
    <>
      <div id="main_div">
        <NavButton nombre="Catálogo" ruta="/catalogo" />
        <div id="logo">
          <div className="logo-stack">
            <img className="img-logo img-logo-base" src={logoImage} alt="Logo" />
            <div className="logo-overlay-div" aria-hidden="true"> <h2>¡Bienvenid@!</h2>Visita nuestro catálogo y si tienes alguna petición, contacta con nosotros por cualquiera de nuestras redes o por gmail!</div>
          </div>
        </div>
        <NavButton nombre="Contacto" ruta="/contacto" />
      </div>
    </>
  );
}

export default Logo;
