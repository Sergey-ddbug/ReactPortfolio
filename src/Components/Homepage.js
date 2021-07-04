import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class Homepage extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="homepage-grid">
          <Cell col={12}>
            <div className="profile-img-border">
              <img className="profile-img" src="images/ava.jpg" alt="Avatar" />
            </div>
            <div className="banner-text">
              <h1>Full Stack Developer</h1>
              <hr />
              <p>
                HTML | CSS | Bootstrap | MySQL | JavaScript | React.JS | Node.js
                | Bulma
              </p>
              <div className="social-links">
                <a
                  href="https://github.com/Sergey-ddbug"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-github-square" aria-hidden="true"></i>
                </a>
                <a
                  href="https://www.instagram.com/sishimovddbug/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-instagram" aria-hidden="true"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/sergey-ishimov-87334612a/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {" "}
                  <i
                    className="fa fa-linkedin-square"
                    aria-hidden="true"
                  ></i>{" "}
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Homepage;
