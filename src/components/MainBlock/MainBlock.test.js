import React from "react";
import { shallow } from "enzyme";

import MainBlock from "./MainBlock";

describe("MainBlock", () => {
  it("should render MainBlock component correctly", () => {
    const component = shallow(<MainBlock />);

    expect(component.find("Header").exists).toBeTruthy();
    expect(component.find("LeftPanel").exists).toBeTruthy();
    expect(component.find("RightPanel").exists).toBeTruthy();
    expect(component.find("BottomPanel").exists).toBeTruthy();
  });
});
