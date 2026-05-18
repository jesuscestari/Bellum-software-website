import { createContext, useContext } from "react";
import type { UseEmblaCarouselType } from "embla-carousel-react";

type CarouselContextType = {
  embla: UseEmblaCarouselType[1];
  selectedIndex: number;
};

const CarouselContextdefaultValue: CarouselContextType = {
  embla: undefined,
  selectedIndex: 0,
};

export const CarouselContext = createContext(CarouselContextdefaultValue);

export const useCarouselContext = () => useContext(CarouselContext);
