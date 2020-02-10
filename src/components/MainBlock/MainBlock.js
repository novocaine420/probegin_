import React from "react";

import Header from "../Header/Header";
import LeftPanel from "../LeftPanel/LeftPanel";
import SearchBlock from "../SearchBlock/SearchBlock";
import RightPanel from "../RightPanel/RightPanel";
import BottomPanel from "../BottomPanel/BottomPanel";
import ResizableComponent from "../ResizableComponent/ResizableComponent";

import "./MainBlock.scss";

const MainBlock = () => {
  return (
    <div className="container">
      <Header title="Product" />
      <ResizableComponent
        className="resizable-comp"
        size={{ width: "100%", height: "" }}
        enable={{ bottom: true }}
        minHeight={100}
      >
        <div className="main-block">
          <ResizableComponent
            className="resizable-left"
            size={{ width: "", height: "100%" }}
            enable={{ right: true }}
            minWidth={22}
            maxWidth={"40%"}
          >
            <LeftPanel />
          </ResizableComponent>
          <SearchBlock />
          <ResizableComponent
            className="resizable-right"
            size={{ width: "", height: "100%" }}
            enable={{ left: true }}
            minWidth={22}
            maxWidth={"40%"}
          >
            <RightPanel />
          </ResizableComponent>
        </div>
      </ResizableComponent>
      <BottomPanel />
    </div>
  );
};

export default MainBlock;
