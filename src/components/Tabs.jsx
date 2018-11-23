import React, { Component } from "react";

import { Rating, List, Divider, Progress } from "semantic-ui-react";

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
            {tabContent.languages.map(lang => (
              <List.Item>
                <List.Content>
                  <List.Header as="h5">{lang.name}</List.Header>
                  <List.Description>
                    <Progress value={lang.rating} total={5} progress="ratio" />
                  </List.Description>
                </List.Content>
              </List.Item>
            ))}
          </List>
        </TabContent>
        <TabContent active={activeIndex === 1}>
          <List>
            {tabContent.otherSkills.map(lang => (
              <List.Item>
                <List.Content>
                  <List.Header as="h5">{lang.name}</List.Header>
                  <List.Description>
                    <Progress value={lang.rating} total={5} progress="ratio" />
                  </List.Description>
                </List.Content>
              </List.Item>
            ))}
          </List>
        </TabContent>
      </div>
    );
  }
}

const tabContent = {
  languages: [
    {
      name: "Angielski",
      rating: "4"
    },
    {
      name: "Niemiecki",
      rating: "3"
    }
  ],
  otherSkills: [
    {
      name: "C#",
      rating: 4
    },
    {
      name: "JavaScript",
      rating: 3
    },
    {
      name: "OOP",
      rating: 5
    }
  ]
};

export default Tabs;
