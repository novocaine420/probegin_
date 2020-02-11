import React from "react";
import { mount } from "enzyme";
import toJson from "enzyme-to-json";

import Table from "./Table";
import { columns } from "../../../mockData/tableColumns";
import { DeviceProvider } from "../../../context/products-context";
import { devices } from "../../../mockData/devices";

describe("Table", () => {
  it("should render table message component correctly", () => {
    const component = mount(
      <DeviceProvider>
        <Table columns={columns} data={devices} />
      </DeviceProvider>
    );
    const rows = component.find("tbody");

    expect(rows.children()).toHaveLength(devices.length);
  });

  it("should render 'no content' message", () => {
    const component = mount(
      <DeviceProvider>
        <Table columns={columns} data={[]} />
      </DeviceProvider>
    );

    expect(component.find(".no-content-message").text()).toEqual(
      "there are no such products"
    );
  });
});
