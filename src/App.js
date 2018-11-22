import React, { Component } from 'react';
import { Sticky } from 'semantic-ui-react';
import DynamicHeader from "./headers/DynamicHeader";

import './App.scss';

class App extends Component {
  state = {};

  handleContextRef = contextRef => {
    this.setState({ contextRef });
  }

  render() {
    const { contextRef } = this.state;

    return (
      <div className="app-container">
        <DynamicHeader />
        <div className="cv-container">
          <aside>
            <div>
              <Sticky context={contextRef} pushing offset={150}>
                {
                  // Left pane
                }
              </Sticky>
            </div>
          </aside>
          <section ref={this.handleContextRef}>
            {
              // Main content
            }
          </section>
        </div>
      </div>
    );
  }
}

export default App;
