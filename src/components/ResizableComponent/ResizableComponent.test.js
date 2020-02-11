import React from "react";
import { shallow } from "enzyme";

import ResizableComponent from "./ResizableComponent";

describe("ResizableComponent", () => {
  it("should render ResizableComponent component correctly", () => {
    const props = {
      className: "className",
      size: { width: "", height: "100%" },
      enable: {
        top: false,
        right: true,
        bottom: false,
        left: false,
        topRight: false,
        bottomRight: false,
        bottomLeft: false,
        topLeft: false
      },
      minWidth: 22,
      maxWidth: "40%"
    };
    const component = shallow(
      <ResizableComponent {...props}>
        <span>child</span>
      </ResizableComponent>
    );

    expect(component.find("Resizable").props()).toEqual(
      expect.objectContaining(props)
    );
  });
});
