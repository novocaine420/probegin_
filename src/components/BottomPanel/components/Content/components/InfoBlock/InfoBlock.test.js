import React from "react";
import { shallow } from "enzyme";

import InfoBlock from "./InfoBlock";

describe("InfoBlock", () => {
  it("should render InfoBlock component correctly", () => {
    const label = "label";
    const text = "text";
    const component = shallow(<InfoBlock label={label} text={text} long />);

    const spans = component.find(".info-block");

    expect(spans.childAt(0).text()).toEqual(label);
    expect(spans.childAt(1).text()).toEqual(text);
    expect(spans.childAt(1).hasClass("text long")).toEqual(true);
  });
});
