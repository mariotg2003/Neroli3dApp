import * as Dialog from "@radix-ui/react-dialog";
import { useState } from "react";
import "./components_css/modal_card.css";
import Pines from "../assets/catalog_image/pines.jpg"

function ModalCard({producto}:{producto:string}) {
    const [abierto, setAbierto] = useState(false);

    const handleOpenChange = (open: boolean) => {
        setAbierto(open);
        if (open) document.body.classList.add('modal-open');
        else document.body.classList.remove('modal-open');
    };

    return (
        <>
            <button type="button" onClick={() => setAbierto(true)}>Ver más</button>
            <Dialog.Root open={abierto} onOpenChange={handleOpenChange}>
                <Dialog.Portal>
                    <Dialog.Overlay className="back"/>

                    <Dialog.Content className="content">
                        <div className="modal-img"><img className="catalog-img" src={Pines} alt="Detalle del producto"/></div>
                        <div className="modal-info">
                            <div className="modal-title">
                                <Dialog.Title>{producto}</Dialog.Title>
                            </div>
                            
                            <div className="modal-text">
                                <Dialog.Description>Descripción accesible.</Dialog.Description>
                            </div>

                            <Dialog.Close asChild>
                                <button type="button">Cerrar</button>
                            </Dialog.Close>
                        </div>

                    </Dialog.Content>
                </Dialog.Portal>
            </Dialog.Root>
        </>
    );
}

export default ModalCard;