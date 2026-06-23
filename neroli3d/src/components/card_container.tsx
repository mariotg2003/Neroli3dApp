import Card from "./card.tsx";
import "./components_css/card_container.css";

function card_container() {
  return (
    <>
        <div className="card_container">
            <Card nombre="Estampitas 3D" />
            <Card nombre="Pines" />
            <Card nombre="Nero Pops" />
            <Card nombre="Celebraciones" />
            <Card nombre="NeroLámparas" />
            <Card nombre="NeroNazarenos" />
            <Card nombre="Coleccionismo" />
        </div>
    </>
  )
}

export default card_container;