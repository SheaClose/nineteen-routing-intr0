import React, { Component } from "react";
import ChildRouteExample from "./ChildRouteExample";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import "./App.css";

let names = ["Shea", "Spencer", "Tim", "Logan", "Jonathan", "Steven", "Erik"];

class Home extends React.Component {
  goToThere(ind) {
    this.props.history.push(`/person/${ind}`);
  }
  render() {
    let namesList = names.map((name, ind) => {
      return (
        <div
          onClick={() => this.goToThere(ind)}
          className="listofnames"
          key={ind}
        >
          {name}
        </div>
      );
    });
    return <h1>{namesList}</h1>;
  }
}

function About(props) {
  return <h1>About!</h1>;
}

function Person(props) {
  // console.log("props: ", props.match.params.ind);
  let { ind } = props.match.params;
  return <h1>You selected: {names[ind]}</h1>;
}

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              height: "10vh",
              background: "black",
              color: "white"
            }}
          >
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/person/4">Person</Link>
            <Link to="/pizza">404</Link>
          </nav>
          <Switch className="App">
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/person/:ind" component={Person} />
            <Route path="/example/:opt" component={ChildRouteExample} />
            <Route path="*" render={props => <h1>404 Not Found!</h1>} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;

// render(){

// render <PassedInComponent match={{params}} location={{href:''}}/>
// }
