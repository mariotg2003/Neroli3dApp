import "./components_css/top_bar.css";
import NavButton from "./nav_button.tsx";
import { useState } from "react";

function TopBar({ nombreIzq, rutaIzq, nombreDer, rutaDer, titulo }: { nombreIzq: string, rutaIzq: string, nombreDer: string, rutaDer: string, titulo: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const show = nombreIzq != "" ? false : true

  if (show) {
    return <div><h1>Neroli3D</h1></div>
  }


  return (
    <div id="top_bar">
      <div id="elements">
        <div className="titulo">{titulo}</div>
        
        <button className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          ☰
        </button>

        {/* Contenedor de las dos opciones de navegación, cambia de clase según el estado */}
        <ul className={`menu-opciones ${isOpen ? "open" : ""}`}>
          <li><NavButton nombre={nombreIzq} ruta={rutaIzq} /></li>
          <li><NavButton nombre={nombreDer} ruta={rutaDer} /></li>
        </ul>
      </div>
    </div>
  );
}

export default TopBar;
