import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Messages from "../pages/Messages";
import Visits from "../pages/Visits";
import ProfileInfo from "../pages/Forms";
import Home from "../pages/Home";
import Rx from "../pages/Rx";
import LabResult from "../pages/LabResult";
import SideBar from "../components/SideBar/SideBar";
import Header from "../components/Header";
import "./router.css";

class PatientRouter extends Component {
  render() {
    return(
      <div className="view-container">
        <SideBar />
        <div className="view-content">
          <Header>Patient Name</Header>
          <Switch>
            <Route path="/patients/messages" component={Messages} />
            <Route path="/patients/profile-info" component={ProfileInfo} />
            <Route path="/patients/lab-result" component={LabResult} />
            <Route path="/patients/visits" component={Visits} />
            <Route path="/patients/rx" component={Rx} />
            <Route render={props => <Home {...props} which="Patient" />} />
          </Switch>  
        </div>     
      </div>
    )
  }
}

export default PatientRouter;