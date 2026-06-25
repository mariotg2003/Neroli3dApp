import { useMemo } from "react";
import data from "./imgData";
import type { Product } from "./imgData";

export function useSearchInfo(producto: string): Product | undefined {
  return useMemo(() => {
    return data.find((item) => item.name === producto);
  }, [producto]);
}
