import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";

const style = {
  root: {}
};
class HomePage extends Component {
  render() {
    const { classes } = this.props;
    return <div className={classes.root}>Home</div>;
  }
}

export default withStyles(style)(HomePage);
