import React from "react";
import { shallow } from "enzyme";

import Content from "./Content";

describe("Content", () => {
  const data = {
    title: "Main",
    content: { code: "SM1", description: "description" }
  };
  const props1 = { label: "Code", text: data.content.code };
  const props2 = {
    label: "Description",
    text: data.content.description,
    long: true
  };

  const component = shallow(<Content data={data} />);

  it("should render info blocks", () => {
    expect(component.childAt(0).props()).toEqual(props1);
    expect(component.childAt(1).props()).toEqual(props2);
  });

  it('should render "no content" message', () => {
    const data = { title: "Technical" };
    const message = "Sorry, no content yet";

    component.setProps({ data });

    expect(component.find("span").text()).toEqual(message);
  });
});
