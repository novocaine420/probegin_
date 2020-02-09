import React from "react";
import MainBlock from "./components/MainBlock/MainBlock";
import { DeviceProvider, ProductsProvider } from "./context/products-context";

function App() {
  return (
    <div className="App">
      <ProductsProvider>
        <DeviceProvider>
          <MainBlock />
        </DeviceProvider>
      </ProductsProvider>
    </div>
  );
}

export default App;
