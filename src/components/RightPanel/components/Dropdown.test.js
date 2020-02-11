import React from "react";
import { shallow } from "enzyme";

import Dropdown from "./Dropdown";

describe("Dropdown", () => {
  const onChange = jest.fn();
  it("should render Dropdown component correctly", () => {
    const component = shallow(<Dropdown onChange={onChange} />);

    const select = component.find("select");

    select.simulate("change", { target: { value: "company" } });

    expect(onChange).toHaveBeenCalled();
  });
});
