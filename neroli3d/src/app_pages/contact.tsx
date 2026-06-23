import TopBar from "../components/top_bar.tsx";
import BotBar from "../components/bot_bar.tsx";
import ContactCard from "../components/contact_card.tsx";
import "../components/components_css/card_container_contact.css";

function contact() {
  return (
    <>
      <TopBar nombreIzq="Inicio" rutaIzq="/" nombreDer="Catálogo" rutaDer="/catalogo" titulo="Nerolí3D" />
      <div className="card_container_contact">
        <ContactCard titulo="Instagram" link="https://www.instagram.com/neroli3d/" />
        <ContactCard titulo="Gmail" link="mailto:neroli3d@gmail.com" />
        <ContactCard titulo="TikTok" link="https://www.tiktok.com/@neroli3d" /> 
      </div>

      <BotBar />
    </>
  );
}

export default contact;
