import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import NavBar from "./navbar-tab";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import RequestCard from "./requestcard";

const styles = theme => ({
  root: {
    flexGrow: 1
  }
});

class Request extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={root}>
        <h1>Requests</h1>
          <br/>
        <RequestCard />
      </div>
    );
  }
}

Request.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Request);
