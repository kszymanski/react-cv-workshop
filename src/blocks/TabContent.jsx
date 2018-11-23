import React from "react";

import './TabContent.scss';

const TabContent = ({ active, children }) => (
  <div className={`tab-content ${active ? "active" : ""}`}>{children}</div>
);

export default TabContent;
