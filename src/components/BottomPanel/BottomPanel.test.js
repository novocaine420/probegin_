import React from "react";
import { mount } from "enzyme";

import BottomPanel from "./BottomPanel";
import { DeviceProvider } from "../../context/products-context";

describe("BottomPanel", () => {
  it("should render BottomPanel component correctly", () => {
    const component = mount(
      <DeviceProvider>
        <BottomPanel />
      </DeviceProvider>
    );

    expect(component.find("Tab").exists).toBeTruthy();
    expect(component.find("Content").exists).toBeTruthy();
  });
});
