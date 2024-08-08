import { createContext, useEffect, useState } from "react";

export const RatingContext = createContext();

export const RatingProvider = (props) => {
  const [products, setProducts] = useState({ products: [] });

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  return (
    <RatingContext.Provider value={products}>
      {props.children}
    </RatingContext.Provider>
  );
};
