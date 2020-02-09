import React, { useContext, useState, useEffect } from "react";

import Tab from "./components/Tab/Tab";
import Content from "./components/Content/Content";
import { tabsData } from "../../mockData/tabs";
import { DeviceContext } from "../../context/products-context";

import "./BottomPanel.scss";

const BottomPanel = () => {
  const [tabs, setTabs] = useState(tabsData);
  const [device] = useContext(DeviceContext);

  useEffect(() => {
    tabs[0].content = { code: device.code, description: device.description };
    setTabs([...tabs]);
  }, [device]);

  const onTabClick = id => {
    setTabs(tabs.map(tab => ({ ...tab, isCurrent: tab.id === id })));
  };

  return (
    <div className="bottom-panel">
      <div className="tabs">
        {tabs.map((tab, index) => (
          <Tab
            key={index}
            title={tab.title}
            isCurrent={tab.isCurrent}
            onClick={() => onTabClick(tab.id)}
          />
        ))}
      </div>
      <div className="content">
        <Content data={tabs.find(tab => tab.isCurrent)} />
      </div>
    </div>
  );
};

export default BottomPanel;
