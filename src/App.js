import React, { Component } from "react";
import { Route } from "react-router-dom";
import Home from "./components/index";
import CssBaseline from "@material-ui/core/CssBaseline";
import "./App.css";
import Resume from "./components/resume";
class App extends Component {
  render() {
    return (
      <div className="body">
        <CssBaseline />

        <Route path="/" component={Home} exact />
        <Route path="/resume" component={Resume} />
        {/* <Route path="/contacts" component={Contacts} /> */}
      </div>
    );
  }
}
export default App;
