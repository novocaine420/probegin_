import React from "react";
import PropTypes from "prop-types";
import { Resizable } from "re-resizable";
import { useResize } from "../hooks/useResize";

const ResizableComponent = ({
  children,
  className,
  size,
  minHeight,
  minWidth,
  maxWidth,
  enable
}) => {
  const [height, setHeight] = useResize("");

  return (
    <Resizable
      className={className}
      size={size}
      onResizeStop={(e, direction, ref, d) => {
        setHeight(height + d.height);
      }}
      minHeight={minHeight}
      minWidth={minWidth}
      maxWidth={maxWidth}
      enable={{
        top: false,
        right: false,
        bottom: false,
        left: false,
        topRight: false,
        bottomRight: false,
        bottomLeft: false,
        topLeft: false,
        ...enable
      }}
    >
      {children}
    </Resizable>
  );
};

ResizableComponent.propTypes = {};

export default ResizableComponent;
