import "./components_css/top_bar.css";
import NavButton from "./nav_button.tsx";
function top_bar({nombreIzq, rutaIzq, nombreDer, rutaDer, titulo} : {nombreIzq: string, rutaIzq: string, nombreDer: string, rutaDer: string, titulo: string}) {
   
  return (
    <>
      <div id="top_bar">
        <div id="elements">
          <NavButton nombre = {nombreIzq} ruta={rutaIzq} />
          <div className="titulo">{titulo}</div>
          <NavButton nombre={nombreDer} ruta={rutaDer} />
        </div>
      </div>
    </>
  );
}

export default top_bar;
