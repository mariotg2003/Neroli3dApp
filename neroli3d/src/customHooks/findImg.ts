import { useMemo } from "react";
import data from "../data/imgData.json";

interface Product {
    name : string,
    url : string,
    description : string
}

export function useSearchInfo(producto: string): Product {

  const url = useMemo(() => {
    // Buscamos el objeto por el campo dinámico (p. ej. "name")
    const item = (data as any[]).find((el) => el.name === producto);

    return item;
  }, [producto]);

  return url;
}