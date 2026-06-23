import TopBar from "../components/top_bar.tsx";
import BotBar from "../components/bot_bar.tsx";
import CardContainer from "../components/card_container.tsx";

function catalog() {
  return (
    <>
      <TopBar nombreIzq="Inicio" rutaIzq="/" nombreDer="Contacto" rutaDer="/contacto" titulo="Nerolí3D" />
      <CardContainer />
      <BotBar />
    </>
  );
}

export default catalog;
