import estampitas from "../assets/catalog_img/estampitas.png";
import pines from "../assets/catalog_img/pines.png";
import neropops from "../assets/catalog_img/neropops.png";
import nerolamparas from "../assets/catalog_img/nerolamparas.png";
import coleccionismo from "../assets/catalog_img/coleccionismo.png";
import neroliLogo from "../assets/neroli_logo.jpg";

export interface Product {
  name: string;
  url: string;
  description: string;
}

const data: Product[] = [
  {
    name: "estampitas",
    url: estampitas,
    description: "Estampitas 3D",
  },
  {
    name: "pines",
    url: pines,
    description: "Pines para todo tipo de celebraciones y eventos",
  },
  {
    name: "neropops",
    url: neropops,
    description: "Tus figuras favoritas para capturar momentos increíbles",
  },
  {
    name: "celebraciones",
    url: neroliLogo,
    description: "Todo tipo de merchandising para eventos y celebraciones",
  },
  {
    name: "nerolamparas",
    url: nerolamparas,
    description: "Lamparitas personalizadas para capturar momentos especiales",
  },
  {
    name: "neronazarenos",
    url: neroliLogo,
    description: "Nazarenos en miniatura para que la pasión nunca acabe",
  },
  {
    name: "coleccionismo",
    url: coleccionismo,
    description: "Figuras de coleccionismo diseñadas desde 0",
  },
];

export default data;
