import React, { Component } from "react";
import AllCours from "./allCours";
import { Databd } from "../data/databd";

export default class CoursList extends Component {
  state = {
    projects: Databd,
    radios: [
      { id: 1, value: "javascript" },
      { id: 2, value: "html/css" },
      { id: 3, value: "react" },
      { id: 4, value: "php" },
      { id: 5, value: "python" },
      { id: 6, value: "design" },
    ],
    selectedRadio: "javascript",
  };

  handleRadio = (event) => {
    let radio = event.target.value;
    this.setState({ selectedRadio: radio });
  };

  render() {
    let { projects, radios, selectedRadio } = this.state;

    return (
      <div>
        <div className="portfolioContent">
          <ul className="radioDisplay">
            {radios.map((radio) => {
              return (
                <li key={radio.id}>
                  <input
                    type="radio"
                    name="radio"
                    checked={radio.value === selectedRadio}
                    value={radio.value}
                    id={radio.value}
                    onChange={this.handleRadio}
                  />
                  <label htmlFor={radio.value}>{radio.value}</label>
                </li>
              );
            })}
          </ul>
          <div className="projects">
            {projects
              .filter((item) => item.languages.includes(selectedRadio))
              .map((item) => {
                return <AllCours key={item.id} item={item} />;
              })}
          </div>
        </div>
      </div>
    );
  }
}

// export default CoursList;
