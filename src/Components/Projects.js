import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Grid,
  Card,
  CardTitle,
  CardText,
  CardActions,
  Button,
} from "react-mdl";

class Projects extends Component {
  constructor(props) {
    super(props);

    this.ecommerce = () => {
      window.location.assign(
        "https://github.com/Sergey-ddbug/eComerce_Beer_Box"
      );
    };
    this.firstproject = () => {
      window.location.assign("https://github.com/Sergey-ddbug/The-Dad-DOJO");
    };
    this.workdayplaner = () => {
      window.location.assign("https://github.com/Sergey-ddbug/WorkDayPlaner");
    };
    this.userdirectory = () => {
      window.location.assign("https://github.com/Sergey-ddbug/UserDirectory");
    };
    this.weatherdashboard = () => {
      window.location.assign(
        "https://github.com/Sergey-ddbug/WeatherDashboard"
      );
    };

    this.toggleCategories = () => {
      return (
        <div
          className="row"
          style={{
            margin: "180px",
          }}
        >
          {/* {DADdoJO} */}
          <Card shadow={5} className="project-item">
            <CardTitle
              style={{
                color: "white",
                height: "200px",
                background: "url(images/Daddojo.png) center / cover",
              }}
            ></CardTitle>
            <CardText
              style={{ textAlign: "justify", fontSize: "25px", color: "#333" }}
            >
              DadDOJO
            </CardText>
            <CardActions border>
              <Button
                style={{ margin: "0 100px" }}
                raised
                ripple
                primary
                onClick={this.firstproject.bind(this)}
              >
                <i className="fa fa-github" aria-hidden="true" /> Github
              </Button>
            </CardActions>
          </Card>
          <Card shadow={5} className="project-item">
            <CardTitle
              style={{
                color: "white",
                height: "200px",
                background: "url(images/ecommerce.png) center / cover",
              }}
            ></CardTitle>
            <CardText
              style={{ textAlign: "justify", fontSize: "25px", color: "#333" }}
            >
              E-commerce BeerBox
            </CardText>
            <CardActions border>
              <Button
                style={{ margin: "0 100px" }}
                raised
                ripple
                primary
                onClick={this.ecommerce.bind(this)}
              >
                <i className="fa fa-github" aria-hidden="true" /> Github
              </Button>
            </CardActions>
          </Card>
          <Card shadow={5} className="project-item">
            <CardTitle
              style={{
                color: "#333",
                height: "200px",
                background: "url(images/weather.png) center / cover",
              }}
            ></CardTitle>
            <CardText
              style={{ textAlign: "justify", fontSize: "25px", color: "#333" }}
            >
              Weather Dashboard
            </CardText>
            <CardActions border>
              <Button
                style={{ margin: "0 100px" }}
                raised
                ripple
                primary
                onClick={this.weatherdashboard.bind(this)}
              >
                <i className="fa fa-github" aria-hidden="true" /> Github
              </Button>
            </CardActions>
          </Card>
          <Card shadow={5} className="project-item">
            <CardTitle
              style={{
                color: "white",
                height: "200px",
                background: "url(images/employe.png) center / cover",
              }}
            ></CardTitle>
            <CardText
              style={{ textAlign: "justify", fontSize: "25px", color: "#333" }}
            >
              Employee Directory
            </CardText>
            <CardActions border>
              <Button
                style={{ margin: "0 100px" }}
                raised
                ripple
                primary
                onClick={this.userdirectory.bind(this)}
              >
                <i className="fa fa-github" aria-hidden="true" /> Github
              </Button>
            </CardActions>
          </Card>
        </div>
      );
    };
  }
  render() {
    return (
      <div>
        <Grid>
          <>
            <div className="row">{this.toggleCategories()}</div>
          </>
        </Grid>
      </div>
    );
  }
}

export default Projects;
