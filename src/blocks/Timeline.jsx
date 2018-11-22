import React from "react";
import { Container, Header, Grid } from "semantic-ui-react";

import SectionHeader from './SectionHeader';
import "./Timeline.scss";

const Timeline = ({ header, items }) => (
  <Container text className="timeline">
    <SectionHeader>
      {header}
    </SectionHeader>
    <Grid columns={2}>
      {items.map((item, index) => (
        <Grid.Row key={index}>
          <Grid.Column width={3}>
            {item.from} - {item.to}
          </Grid.Column>
          <Grid.Column width={13}>
            <Container>
              <Header as="h4">
                {item.title}
                <Header.Subheader>{item.description}</Header.Subheader>
              </Header>
            </Container>
          </Grid.Column>
        </Grid.Row>
      ))}
    </Grid>
  </Container>
);

export default Timeline;
