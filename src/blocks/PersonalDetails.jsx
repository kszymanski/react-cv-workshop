import React from "react";
import { List, Header } from "semantic-ui-react";

import SidebarHeader from './SidebarHeader';

import "./PersonalDetails.scss";

const PersonalDetails = () => (
  <div className="personal-details">
    <SidebarHeader text='Dane osobowe' />
    <List>
      <List.Item>
        <List.Icon name="calendar alternate outline" />
        <List.Content>18/08/2000</List.Content>
      </List.Item>
      <List.Item>
        <List.Icon name="home" />
        <List.Content>ul. Bojkowska 37A</List.Content>
      </List.Item>
      <List.Item>
        <List.Icon name="marker" />
        <List.Content>44-100 Gliwice</List.Content>
      </List.Item>
      <List.Item>
        <List.Icon name="phone" />
        <List.Content>+48 500 500 500</List.Content>
      </List.Item>
      <List.Item>
        <List.Icon name="mail" />
        <List.Content>
          <a href="mailto:jack@semantic-ui.com">jack@semantic-ui.com</a>
        </List.Content>
      </List.Item>
    </List>
  </div>
);

export default PersonalDetails;
