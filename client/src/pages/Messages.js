import React, { Component } from "react";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { Input, TextArea, FormBtn } from "../components/Form";

class Messages extends Component {
  state = {
    books: [],
    sender: "",
    email: "",
    subject: "",
    synopsis: ""
  };

  // Handles updating component state when the user types into the input field
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();

    // We should probably just pull their name and email from the db instead of making them type it in again -- for future.
    if (this.state.sender && this.state.email) {
      API.postMessage(
        {
          sender: this.state.sender,
          email: this.state.email,
          subject: this.state.subject,
          body: this.state.body
        }
      )
        .then(res => console.log(res))
        .catch(err => console.log(err));
    }
  };


  render() {
    return (

  <Container id="messages-container">
        <Row>
          <Col size="md-3 sm-3"></Col>
          <Col size="md-6 sm-6" >
            <h1>Send a Message</h1>
            <form>
              <Input
                value={this.state.sender}
                onChange={this.handleInputChange}
                name="sender"
                placeholder="Your name (required)" />
              <Input
                value={this.state.email}
                onChange={this.handleInputChange}
                name="email"
                placeholder="Your email (required)" />
              <Input
                value={this.state.subject}
                onChange={this.handleInputChange}
                name="subject"
                placeholder="Email subject (required)" />
              <TextArea
                value={this.state.body}
                onChange={this.handleInputChange}
                name="body"
                placeholder="Type your message here..." />
              <FormBtn
                // disabled={!(this.state.author && this.state.title)}
                onClick={this.handleFormSubmit} 
              >
                Send
              </FormBtn>
            </form>
          </Col>
        
        <Col size="sm-3 md-3"></Col>
      </Row>
    </Container>

    );
  }
}

export default Messages;