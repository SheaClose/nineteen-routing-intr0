import React, { Component } from "react";
import { Link } from "react-router-dom";
function About() {
  return <div>About</div>;
}
function Home() {
  return <div>Home</div>;
}
export default class ChildRouteExample extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        {/* <NavBar /> */}
        <div>
          <Home {...this.props} />
          <About {...this.props} />
        </div>
      </div>
    );
  }
}
