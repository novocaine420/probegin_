import React from "react";
import { shallow } from "enzyme";

import Tab from "./Tab";

describe("Tab", () => {
  const onClick = jest.fn();

  it("should render Tab component correctly", () => {
    const title = "title";

    const component = shallow(
      <Tab title={title} isCurrent onClick={onClick} />
    );

    expect(component.find("span").text()).toEqual(title);
    expect(component.find("span").hasClass("tab current")).toEqual(true);

    component.simulate("click");

    expect(onClick).toHaveBeenCalled();
  });
});
