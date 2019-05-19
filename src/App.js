import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

// theme
import { MuiThemeProvider } from "@material-ui/core/styles";
import theme from "./theme";

import "typeface-roboto";

// components
import HomePage from "./components/HomePage";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <MuiThemeProvider theme={theme}>
          <Switch>
            <Route exact path="/" component={HomePage} />
          </Switch>
        </MuiThemeProvider>
      </BrowserRouter>
    );
  }
}

export default App;
