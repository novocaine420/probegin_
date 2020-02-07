import React, { useState } from "react";

export const useResize = d => {
  const [dimension, setDimension] = useState(d);

  return [dimension, setDimension];
};
