import * as Dialog from "@radix-ui/react-dialog";
import { useState } from "react";
import "./components_css/modal_card.css";
import {useSearchInfo} from "../customHooks/findImg";

function ModalCard({producto, productoName}:{producto:string, productoName:string}) {
    const [abierto, setAbierto] = useState(false);

    const product = useSearchInfo(productoName)


    return (
        <>
            <button className="button-card" type="button" onClick={() => setAbierto(true)}>Ver más</button>
            <Dialog.Root open={abierto} onOpenChange={setAbierto}>
                <Dialog.Portal>
                    <Dialog.Overlay className="back"/>

                    <Dialog.Content className="content">
                        <div className="modal-img"><img className="catalog-img" src={product.url} alt="Detalle del producto"/></div>
                        <div className="modal-info">
                            <div className="modal-title">
                                <Dialog.Title>{producto}</Dialog.Title>
                            </div>
                            
                            <div className="modal-text">
                                <Dialog.Description>{product.description}</Dialog.Description>
                            </div>

                            <Dialog.Close asChild>
                                <button type="button" className="button-card">Cerrar</button>
                            </Dialog.Close>
                        </div>

                    </Dialog.Content>
                </Dialog.Portal>
            </Dialog.Root>
        </>
    );
}

export default ModalCard;