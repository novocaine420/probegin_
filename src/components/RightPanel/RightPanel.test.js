import React from "react";
import { shallow } from "enzyme";

import RightPanel from "./RightPanel";
import { ProductsProvider } from "../../context/products-context";

describe("RightPanel", () => {
  it("should render RightPanel component correctly", () => {
    const component = shallow(
      <ProductsProvider>
        <RightPanel />
      </ProductsProvider>
    );

    expect(component.find("Dropdown").exists).toBeTruthy();
    expect(component.find("Cell").exists).toBeTruthy();
  });
});
