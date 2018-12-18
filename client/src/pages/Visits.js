import React, { Component } from "react";
import API from "../utils/API";
import AuthAPI from "../utils/AuthAPI";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";


class Visits extends Component {
  // Setting our component's initial state
  state = {
    visits: [],
    username: "",
    PatientID: "",
    DoctorID: "",
    Doctor_Speciality: "",
    Prescription: "",
    Diagnosis: "",
    Data: "",
    Time: ""
  };

  // When the component mounts, load all visits and save them to this.state.visits
  componentDidMount() {
    this.loadVisits();
    this.loadUser();
  };

  // Loads all visits  and sets them to this.state.visits
  loadVisits = () => {
    API.getVisits()
      .then(res =>
        this.setState({ visits: res.data, Doctor_Speciality: "", Prescription: "", Diagnosis: "" })
      )
      .catch(err => console.log(err));
  };

  chopDate = Date => {
    return Date.substring(0, 10)
  };

  loadUser = () => {
    AuthAPI.getCurrentUser()
    .then(res => this.setState({ username: res.data.username}))
    .catch(err => console.log(err))
  };

  render() {
    return (
      <Container classes="yellow-back">
        <Row>
          <Col size="md-2 sm-2"></Col>
          <Col size="md-8 sm-8">
            <h1>{this.state.username}'s Previous Visits</h1>
            {this.state.visits.length ? (
              <List>
                {this.state.visits.map(visit => {
                  let choppedDate = this.chopDate(visit.Time);
                  return (
                    <ListItem key={visit._id}>
                      <Row>
                        <Col size="3">
                          <h5><strong>
                            {choppedDate}
                          </strong></h5>
                        </Col>
                        <Col size="9">
                          <h5><strong>
                            {visit.DoctorID} ({visit.Doctor_Speciality})
                          </strong></h5>
                        </Col>
                      </Row>
                      <Row>
                        <Col size="3"></Col>
                        <Col size="9">
                          <p>Notes: {visit.Data}</p>
                          <p>Prescription: {visit.Prescription}</p>
                        </Col>
                      </Row>
                    </ListItem>
                  );
                })}
              </List>
            ) : (
                <h3>No Results to Display</h3>
              )}
          </Col>
          <Col size="md-2 sm-2"></Col>
        </Row>
      </Container>
    );
  }
}

export default Visits;