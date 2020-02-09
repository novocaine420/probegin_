import React, { createContext, useState } from "react";
import { devices as allProducts } from "../mockData/devices";

export const ProductsContext = createContext();
export const DeviceContext = createContext();

export const ProductsProvider = props => {
  const [products, setProducts] = useState(allProducts);

  return (
    <ProductsContext.Provider value={[products, setProducts, allProducts]}>
      {props.children}
    </ProductsContext.Provider>
  );
};

export const DeviceProvider = props => {
  const [device, setDevice] = useState({});

  return (
    <DeviceContext.Provider value={[device, setDevice]}>
      {props.children}
    </DeviceContext.Provider>
  );
};
