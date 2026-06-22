import TopBar from "./components/top_bar.tsx";
import BotBar from "./components/bot_bar.tsx";

function contact() {
  return (
    <>
      <TopBar nombreIzq="Inicio" rutaIzq="/" nombreDer="Catálogo" rutaDer="/catalogo" titulo="Nerolí3D" />
      <BotBar />
    </>
  );
}

export default contact;
