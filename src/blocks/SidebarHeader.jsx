import React from "react";
import { Header } from "semantic-ui-react";

import "./SidebarHeader.scss";

const SidebarHeader = ({text}) => (
    <Header as="h3" block className='sidebar-header'>
      {text}
    </Header>
);

export default SidebarHeader;
