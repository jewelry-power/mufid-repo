import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

// share the Product with other components
export const ProductContext = createContext();

//children prop, which represents the nested components wrapped inside it
const ProductProvider = ({ children }) => {
  // products state
  const [products, setProducts] = useState([]);
  // fetch products (api or local)
  useEffect(() => {
    
    /*

      import productsData from "./productsData.json";
      setProducts(productsData);

    */

    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        const data = response.data;
        setProducts(data);
      })

      .catch((error) => {
        console.error(error);
      });

    // triggered only once "indicated by the empty dependency array"
  }, []);

  return (
    // nested components can access it.
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
