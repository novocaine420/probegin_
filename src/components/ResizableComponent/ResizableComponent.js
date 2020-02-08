import React, { useState } from "react";
import PropTypes from "prop-types";
import { Resizable } from "re-resizable";

const ResizableComponent = ({
  children,
  className,
  size,
  minHeight,
  minWidth,
  maxWidth,
  enable
}) => {
  const [height, setHeight] = useState("");

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

ResizableComponent.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string.isRequired,
  size: PropTypes.object.isRequired,
  minHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  minWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  maxWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  enable: PropTypes.object.isRequired
};

export default ResizableComponent;
