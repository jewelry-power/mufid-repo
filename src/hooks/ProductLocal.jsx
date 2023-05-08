import React, { createContext, useState, useEffect } from "react";
import { TempData } from "../data/TempData";

export const ProductContextLocal = createContext();

const ProductProvider = ({ children }) => {
  const [products2, setProducts2] = useState([]);

  useEffect(() => {
    setProducts2(TempData);
  }, []);

  return (
    <ProductContextLocal.Provider value={{ products2 }}>
      {children}
    </ProductContextLocal.Provider>
  );
};

export default ProductProvider;
