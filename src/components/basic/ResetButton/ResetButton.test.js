import React from "react";
import { shallow } from "enzyme";

import ResetButton from "./ResetButton";

describe("Cell", () => {
  const onClick = jest.fn();
  it("should render Reset component correctly", () => {
    const component = shallow(<ResetButton onClick={onClick} />);

    const span = component.find("span");

    span.simulate("click");

    expect(onClick).toHaveBeenCalled();
    expect(component.text()).toEqual("Reset");
  });
});
