import React from "react";
import { shallow } from "enzyme";

import Input from "./Input";

describe("Input", () => {
  const onChange = jest.fn();
  it("should render Input component correctly", () => {
    const component = shallow(<Input onChange={onChange} />);

    component
      .find("input")
      .simulate("change", { target: { value: "new value" } });

    expect(onChange).toHaveBeenCalled();
  });
});
