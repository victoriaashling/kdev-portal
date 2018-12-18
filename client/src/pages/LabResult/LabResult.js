import React, { Component } from 'react';
import {Row, Col} from "reactstrap";
import { Container } from "../../components/Grid";
import './LabResult.css';
import LeftSide from './leftSide';
import Blood from './Blood';
import Drug from './Drug';
import XRay from './XRay';


export default class LabResult extends Component{

  state = {
    currentPage:""
  }

  handlePageChange = page =>{
    this.setState({
      currentPage: page 
    })
  }

  renderPage = () => {
    if(this.state.currentPage === "Blooddd"){
      return <Blood />;
    }else if(this.state.currentPage === "Druggg"){
      return <Drug />;
    }else if(this.state.currentPage === "XRayyy"){
      return <XRay />;
    }
  }

  render(){
    return(
      <Container classes="yellow-back">
        <Row>
          <Col xs="3"> 
          <LeftSide
            currentPage={this.state.currentPage}
            handlePageChange={this.handlePageChange}
          />
          </Col>
          <Col xs="9">{this.state.currentPage ? this.renderPage():"Welcome to MY Lab Result Page"}</Col>
        </Row>
      </Container>
    )
  }
}