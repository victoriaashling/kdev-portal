import React, { Component } from "react";
import { Link } from 'react-router-dom';
import "./SideBar.css";

class SideBar extends Component {

  handleMenuClick = event => {
    let selection = event.currentTarget;
    let menuItems = document.querySelectorAll(".menu-item");

    if (selection.classList.contains("menu-item")) {
      menuItems.forEach(item => item.classList.remove("menu-active"));
      selection.classList.add("menu-active");
    }
  }

  render() {
    return (
      <div className="side-container">
        <header className="menu-header">PORTAL</header>
        <Link to="/patients/profile-info" className="menu-link">
          <div className="menu-item" onClick={this.handleMenuClick} data-page="patient-data" >
            <i className="fas fa-notes-medical"></i>
            <br /><span>Patient Data</span>
          </div>
        </Link>
        <Link to="/patients/visits" className="menu-link">
          <div className="menu-item" onClick={this.handleMenuClick} data-page="visits" >
            <i className="fas fa-user-md"></i>
            <br /><span>Visits</span>
          </div>
        </Link>
        <Link to="/patients/rx" className="menu-link">
          <div className="menu-item" onClick={this.handleMenuClick} data-page="pharmacy" >
            <i className="fas fa-prescription-bottle-alt"></i>
            <br /><span>Pharmacy</span>
          </div>
        </Link>
        <Link to="/patients/lab-result" className="menu-link">
          <div className="menu-item" onClick={this.handleMenuClick} data-page="lab-results" >
            <i className="fas fa-vials"></i>
            <br /><span>Lab Results</span>
          </div>
        </Link>
        <Link to="/patients/messages" className="menu-link">
          <div className="menu-item" onClick={this.handleMenuClick} data-page="messages" >
            <i className="fas fa-envelope"></i>
            <br /><span>Messages</span>
          </div>
        </Link>
        <footer className="menu-footer"><i className="fas fa-heart"></i> KDEV</footer>
      </div>
    )
  }
}

export default SideBar;