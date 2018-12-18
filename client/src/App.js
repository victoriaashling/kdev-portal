import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PatientRouter from "./router/PatientRouter.js";
// import DoctorRouter from "./router/DoctorRouter.js";
import PageNotFound from './pages/PageNotFound';
import HomePage from './pages/HomePage';
import CreateAccount from "./pages/HomePage/CreateAccount";
import PrivateRoute from "./components/Auth";


class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/createAccount" component={CreateAccount} />
            <PrivateRoute path="/patients" render={props => <PatientRouter />} />
            {/* <PrivateRoute path="/doctors" render={props => <DoctorRouter />} /> */}
            <Route component={PageNotFound} />
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App;