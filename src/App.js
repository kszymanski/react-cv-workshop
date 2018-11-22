import React, { Component } from "react";
import { Sticky } from "semantic-ui-react";

import DynamicHeader from "./headers/DynamicHeader";
import Bio from "./blocks/Bio";
import PersonalDetails from './blocks/PersonalDetails';

import "./App.scss";

class App extends Component {
  state = {};

  handleContextRef = contextRef => {
    this.setState({ contextRef });
  };

  render() {
    const { contextRef } = this.state;

    return (
      <div className="app-container">
        <DynamicHeader />
        <div className="cv-container">
          <aside>
            <div>
              <Sticky context={contextRef} pushing offset={150}>
                <PersonalDetails />
              </Sticky>
            </div>
          </aside>
          <section ref={this.handleContextRef}>
            <Bio>
              <p>
                Na co dzień Senior Web Developer, ale mówi o sobie Inżynier
                Oprogramowania, bo liczy się dostarczanie wartości, nie ważne
                czy w grę wchodzi kod czy nie. Od 6 lat pracuje w firmie Future
                Processing, po godzinach z pasją rozwijając swoje umiejętności w
                hobbystycznych projektach. Frontend to dla niego chleb
                powszedni, z Angularem idzie za pan brat od wersji 1.2 po
                dzisiejszy Angular 2+, zdradzając go czasem dla Reacta.
              </p>
            </Bio>
          </section>
        </div>
      </div>
    );
  }
}

export default App;
