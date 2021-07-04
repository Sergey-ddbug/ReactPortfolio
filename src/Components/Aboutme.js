import React, { Component } from "react";

class Aboutme extends Component {
  render() {
    return (
      <div
        style={{
          textAlign: "center",
          marginLeft: "auto",
          color: "#fff",
          marginRight: "auto",
          marginTop: "100px",
          width: "60%",
          background: "gray",
          padding: "20px",
        }}
      >
        <h1
          style={{
            fontSize: "50px",
            textTransform: "uppercase",
            fontFamily: "Anton, sans-serif",
          }}
        >
          Sergey Ishimov
        </h1>
        <p style={{ textAlign: "justify", fontFamily: "Oxygen, sans-serif" }}>
          My name is Sergey Ishimov .I am a father of beutiful daugher, loving
          husband, for past 13 years ive been working with a cars doing all
          kinds of jobs. I am currently part-time student at UNC bootcamp as a
          full stack developer . I learn HTML , CSS , JavaScript , Node.js ,
          Express.js , MySql, Sequalize, React.js, MongoDB, Been working with
          frameworks such as Bulma , Bootstrap , Animation.js and also library's
          such as JQuery. Chrome's V8 JavaScript engine, Node.js.
        </p>
      </div>
    );
  }
}

export default Aboutme;
