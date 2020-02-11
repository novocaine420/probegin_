import React from "react";
import { getFilters } from "./getFilters";
import { devices } from "../mockData/devices";

it("should return array of uniq values", () => {
  expect(getFilters(devices, "resolution")).toEqual([
    "HD",
    "Full HD",
    "4K",
    "8K"
  ]);
});
