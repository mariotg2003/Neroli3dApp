import Card from "./card.tsx";
import "./components_css/card_container.css";

function card_container() {
  return (
    <>
        <div className="card_container">
            <Card nombre="Estampitas 3D" urlName = "estampitas"/>
            <Card nombre="Pines" urlName = "pines"/>
            <Card nombre="Nero Pops" urlName = "neropops"/>
            <Card nombre="Celebraciones" urlName = "celebraciones"/>
            <Card nombre="NeroLámparas" urlName = "nerolamparas"/>
            <Card nombre="NeroNazarenos" urlName = "neronazarenos"/>
            <Card nombre="Coleccionismo" urlName = "coleccionismo"/>
        </div>
    </>
  )
}

export default card_container;