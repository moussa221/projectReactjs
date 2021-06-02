import React, { Component } from "react";
import Calendar from "react-calendar";

class Picker extends Component {
  render() {
    return (
      <div
        style={{
          //   width: "30%",
          //   margin: "5px",
          //   padding: "10px",
          //   position: "relative",
          //   top: 0,
          //   left: "65%",
          fontFamily: "monospace",
          fontWeight: "bolder",
          //   display: "flex",
            color: "black",
          //   justifyContent: "center",
          //   boxShadow: "5px 5px 5px 7px",
          //   WebkitFontSmoothing: "antialiased",
          //   MozOsxFontSmoothing: "grayscale",
          background: "white",
          //   borderRadius: "15px",
          //   border: "2px solid black",
        }}
      >
        <Calendar />
      </div>
    );
  }
}

export default Picker;
