import React from "react";
import { shallow } from "enzyme";

import Header from "./Header";

describe("Header", () => {
  it("should render Header component correctly", () => {
    const component = shallow(<Header title="title" />);

    expect(component.find("span").text()).toEqual("title");
  });
});
