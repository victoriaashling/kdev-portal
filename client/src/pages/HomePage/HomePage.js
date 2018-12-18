import React, { Component } from "react";
import Login from "./Login";
import "./HomePage.css";


class HomePage extends Component {

  render(){
    return(
     <div className="homepage">
        <Login />
     </div>
    )
  }
};

export default HomePage;