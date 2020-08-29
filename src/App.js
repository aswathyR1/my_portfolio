import React, { Component } from "react";
import { BrowserRouter as Router,Route } from "react-router-dom";
import Home from "./components/index";
import CssBaseline from "@material-ui/core/CssBaseline";
import "./App.css";
import Resume from "./components/resume";
class App extends Component {
  render() {
    return (
      <Router basename={window.location.pathname||''}>
      <div className="body">
        <CssBaseline />

        <Route path="/" component={Home} exact />
        <Route path="/resume" component={Resume} />
        {/* <Route path="/contacts" component={Contacts} /> */}
      </div>
      </Router>
    );
  }
}
export default App;
