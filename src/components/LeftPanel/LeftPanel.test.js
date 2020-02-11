import React from "react";
import { mount } from "enzyme";

import LeftPanel from "./LeftPanel";
import { ProductsProvider } from "../../context/products-context";
import { categories as categoriesData } from "../../mockData/categories";

describe("LeftPanel", () => {
  it("should render LeftPanel component correctly", () => {
    const component = mount(
      <ProductsProvider>
        <LeftPanel />
      </ProductsProvider>
    );

    const categories = component.find("LeftPanel").find(".categories");

    expect(categories.children()).toHaveLength(categoriesData.length);
  });
});
