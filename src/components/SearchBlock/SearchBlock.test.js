import React from "react";
import { mount } from "enzyme";

import SearchBlock from "./SearchBlock";
import {
  DeviceProvider,
  ProductsProvider
} from "../../context/products-context";

describe("SearchBlock", () => {
  it("should render SearchBlock component correctly", () => {
    const component = mount(
      <ProductsProvider>
        <DeviceProvider>
          <SearchBlock />
        </DeviceProvider>
      </ProductsProvider>
    );

    expect(component.find("Input").exists).toBeTruthy();
    expect(component.find("Table").exists).toBeTruthy();
  });
});
