import "./components_css/card.css";
import logoImage from "../assets/neroli_logo.jpg";
import ModalCard from "../components/modal_card";

function card({nombre}: {nombre: string}){
    return(
        <>
            <div className="card">
                <img className="card-image" src={logoImage} alt="Image" />
                <h3 className="card-title">{nombre}</h3>
                <ModalCard producto={nombre}></ModalCard>
            </div>
        </>
    )
}
export default card;