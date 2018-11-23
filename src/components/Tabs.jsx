import React, { Component } from "react";

import { Rating, List, Divider } from "semantic-ui-react";

import TabHeader from "./TabHeader";
import TabContent from "../blocks/TabContent";
import "./Tabs.scss";

class Tabs extends Component {
  state = {
    activeIndex: 0
  };

  changeIndex = index => {
    this.setState({ activeIndex: index });
  };

  render() {
    const { activeIndex } = this.state;
    return (
      <div className="tabs">
        <div className="tabs-headers">
          <TabHeader
            activeIndex={0}
            active={activeIndex === 0}
            onHeaderClicked={this.changeIndex}
          >
            Języki obce
          </TabHeader>
          <TabHeader
            activeIndex={1}
            active={activeIndex === 1}
            onHeaderClicked={this.changeIndex}
          >
            Umiejętności
          </TabHeader>
        </div>
        <TabContent active={activeIndex === 0}>
          <List>
            <List.Item>
              <List.Content>
                <List.Header as='h5'>Angielski</List.Header>
                <List.Description>
                  <Rating maxRating={5} rating={3} icon="star" disabled />
                </List.Description>
              </List.Content>
            </List.Item>
          </List>
        </TabContent>
        <TabContent active={activeIndex === 1}>inne</TabContent>
      </div>
    );
  }
}

export default Tabs;
