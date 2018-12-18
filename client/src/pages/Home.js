import React, { Component } from "react";
import { Container } from "../components/Grid";

class Home extends Component {

  render() {
    return (
      <Container>
        <h2>This is the home page of your {this.props.which} Portal.</h2>
      </Container>
    )
  }
}

export default Home;