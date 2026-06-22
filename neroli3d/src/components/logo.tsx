import logoImage from "../assets/neroli_logo.jpg";
import "./components_css/logo.css";
import NavButton from "./nav_button.tsx";
import "./components_css/main_page.css";

function Logo() {
  return (
    <>
      <div id="main_div">
        <NavButton nombre="Catálogo" ruta="/catalogo" />
        <div id="logo">
          <h1>Neroli3D</h1>
          <img className="img-logo" src={logoImage} alt="Logo" />
        </div>
        <NavButton nombre="Contacto" ruta="/contacto" />
      </div>
    </>
  );
}

export default Logo;
