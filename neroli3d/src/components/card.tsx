import "./components_css/card.css";
import ModalCard from "../components/modal_card";
import {useSearchInfo} from "../customHooks/findImg";

function Card({nombre, urlName}: {nombre: string, urlName: string}){

    const product = useSearchInfo(urlName)
    console.log(product.url)
    return(
        <>
            <div className="card">
                <img className="card-image" src={product.url} alt="Image" />
                <h3 className="card-title">{nombre}</h3>
                <ModalCard producto={nombre} productoName={urlName}></ModalCard>
            </div>
        </>
    )
}
export default Card;