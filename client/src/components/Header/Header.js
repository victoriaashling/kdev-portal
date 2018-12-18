import React, { Component } from "react";
import { Redirect } from 'react-router-dom';
import API from "../../utils/AuthAPI";
import "./Header.css";

class Header extends Component {

  state ={
    isLoggedOut: false,
    currentUserID: ""
  }

  componentDidMount() {
    API.getCurrentUser()
      .then(res => this.setState({currentUserID: res.data.username}))
      .catch(err => console.log(err));
  }

  logout = async () => {
    const response = await API.patientLogout();
    this.setState({ isLoggedOut: response.data.logoutStatus });
  }

  render() {
    if (this.state.isLoggedOut) {
      return (
        <Redirect to={{
          pathname: '/',
          state: { from: this.props.location }
          }} 
        /> 
      )
    }
    return (
      <header className="header-bar">{this.state.currentUserID} | <button onClick={this.logout} className="form-btn logout-btn">Log Out</button></header>
    )
  }
};

export default Header;