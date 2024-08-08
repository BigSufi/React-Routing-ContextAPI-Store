import { createContext } from "react";
import { products } from "../api/data";

export const RatingContext = createContext();

export const RatingProvider = (props) => {
  const product = products.products.map((item) => item.rating);

  return (
    <RatingContext.Provider value={product}>
      {props.children}
    </RatingContext.Provider>
  );
};
