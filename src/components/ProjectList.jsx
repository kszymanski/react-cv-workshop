import React, { Component } from "react";
import { ajax } from "rxjs/ajax";
import { map } from "rxjs/operators";
import { Card, Container } from "semantic-ui-react";

import SectionHeader from '../blocks/SectionHeader';

class ProjectList extends Component {
  state = {
    projects: []
  };
  ajaxSubscription;

  componentDidMount = () => {
    this.ajaxSubscription = ajax(
      `https://api.github.com/users/${
        this.props.githubAccountName
      }/repos?type=owner&sort=updated`
    )
      .pipe(map(ajaxResponse => ajaxResponse.response))
      .subscribe(projects => this.setState({ projects }));
  };

  componentWillUnmount(){
    if(this.ajaxSubscription){
      this.ajaxSubscription.unsubscribe();
    }
  }

  render = () => {
    const { projects } = this.state;
    const githubLink = `https://github.com/${this.props.githubAccountName}`;

    return (
      <Container text>
        <SectionHeader>
          My current projects (see my <a href={githubLink}>github</a>)
        </SectionHeader>
        {!!projects && (
          <Card.Group itemsPerRow={3}>
            {projects
              .filter(p => !p.fork)
              .slice(0, 6)
              .map(p => (
                <Card
                  key={p.id}
                  href={p.html_url}
                  header={p.name}
                  meta={p.language}
                />
              ))}
          </Card.Group>
        )}
      </Container>
    );
  };
}

export default ProjectList;
