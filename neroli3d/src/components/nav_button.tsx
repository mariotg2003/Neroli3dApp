import "./components_css/nav_button.css";
import { Link } from "react-router-dom";

function Nav_button({ nombre , ruta}: { nombre: string, ruta: string }) {
  if (nombre === "") {
    return null;
  }
  return (
    <>
      <Link to={ruta} style={{ textDecoration: 'none' }}>
        <button className="button-nav">{nombre}</button>
      </Link>
    </>
  );
}

export default Nav_button;
