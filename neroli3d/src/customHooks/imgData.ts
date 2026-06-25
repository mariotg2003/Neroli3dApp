import estampitas from "../assets/catalog_img/estampitas.webp";
import pines from "../assets/catalog_img/pines.webp";
import neropops from "../assets/catalog_img/neropops.webp";
import nerolamparas from "../assets/catalog_img/nerolamparas.webp";
import coleccionismo from "../assets/catalog_img/coleccionismo.webp";
import celebraciones from "../assets/catalog_img/celebraciones.webp"
import neronazarenos from "../assets/catalog_img/neronazarenos.webp"

export interface Product {
  name: string;
  url: string;
  description: string;
}

const textoPin = `¿Buscas accesorios que realmente marquen la diferencia? \n\n Nuestros pines, creados con tecnología 3D de alta precisión, rompen con lo convencional. \n\nNo son solo pines; son pequeñas piezas de diseño único con texturas y geometrías imposibles.`;
const textoNeroPops = `¿Buscas un muñeco que capture tu esencia o la de alguien especial? \n\nNuestros neroPops, creados mediante impresión 3D de alta precisión, son figuras totalmente personalizadas que rompen con lo convencional. \n\nNo son solo coleccionables; son piezas únicas de diseño artesanal que transforman cualquier estilo en una figura con personalidad propia.`;
const textoEstampitas = `¿Buscas un detalle que destaque por su originalidad? \n\nNuestras estampitas 3D, creadas con tecnología de filamento bicolor, rompen con lo convencional. \n\nNo son simples pegatinas; son piezas con relieve y robustez que transforman cualquier diseño en un objeto único y tangible, totalmente personalizable a tu gusto.`;
const textoCelebraciones = `¿Buscas que tu evento sea inolvidable? \n\nNuestro merchandising personalizado, creado con tecnología 3D de alta precisión, rompe con lo convencional. \n\nNo son simples detalles; son piezas únicas y robustas que transforman cualquier celebración en una experiencia memorable, totalmente adaptables a la identidad de tu marca o evento.`;
const textoNeroLamparas = `¿Buscas una iluminación que refleje tu personalidad? \n\nNuestras lámparas personalizables, creadas con tecnología 3D de alta precisión, rompen con lo convencional. \n\nNo son solo luz de mesita de noche; son piezas únicas y robustas que transforman tu espacio en un ambiente exclusivo, totalmente adaptadas a tus gustos y estilo.`;
const textoColeccionables = `¿Buscas una pieza de colección que capture cada detalle? \n\nNuestras figuras personalizadas, impresas en filamento de alta precisión o resina técnica, rompen con lo convencional. \n\nNo son solo adornos; son piezas únicas de gran robustez y acabado impecable que transforman cualquier rincón en una exposición exclusiva, totalmente adaptadas a tus ideas.`;
const textoNazarenos = `¿Buscas un recuerdo único de nuestra tradición? \n\nNuestros nazarenos, creados con tecnología 3D de alta precisión, rompen con lo convencional. \n\nYa sean en formato mini para compartir o piezas mayores para decorar, no son solo figuras; son representaciones únicas que capturan la esencia de la Semana Santa con una calidad y detalle excepcionales.`;

const data: Product[] = [
  {
    name: "estampitas",
    url: estampitas,
    description: textoEstampitas,
  },
  {
    name: "pines",
    url: pines,
    description: textoPin,
  },
  {
    name: "neropops",
    url: neropops,
    description: textoNeroPops,
  },
  {
    name: "celebraciones",
    url: celebraciones,
    description: textoCelebraciones,
  },
  {
    name: "nerolamparas",
    url: nerolamparas,
    description: textoNeroLamparas,
  },
  {
    name: "neronazarenos",
    url: neronazarenos,
    description: textoNazarenos,
  },
  {
    name: "coleccionismo",
    url: coleccionismo,
    description: textoColeccionables,
  },
];

export default data;
