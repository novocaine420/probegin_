import React from "react";
import { shallow } from "enzyme";

import Cell from "./Cell";

describe("Cell", () => {
  const onClick = jest.fn();
  it("should render Cell component correctly", () => {
    const component = shallow(<Cell title="title" onClick={onClick} />);
    const span = component.find("span");

    expect(span.text()).toEqual("title");

    span.simulate("click");

    expect(onClick).toHaveBeenCalled();
  });
});
