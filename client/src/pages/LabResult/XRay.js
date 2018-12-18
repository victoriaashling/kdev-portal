import React , { Component }from 'react';
import { Table } from 'semantic-ui-react';
import API from "../../utils/API";



class XRay extends Component{

  state ={
    XRayResult:[]
  } 

  componentDidMount(){
    this.loadBlood();
  }

  loadBlood = () =>{
    API.getLabresultXRay()
      .then(res => 
        this.setState({
          XRayResult:res.data[0]
        })
      )
      .catch(err => console.log(err));
  }

  render(){

    return(
      <div>
        <h3>X-Ray Testing Result:</h3>
        <Table celled inverted selectable>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Name: {this.state.XRayResult.First_Name} {this.state.XRayResult.Last_Name}</Table.HeaderCell>
              <Table.HeaderCell>Notes: {this.state.XRayResult.Note}</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            <Table.Row>
              <Table.Cell>
            X-Ray Result: 
            <hr></hr>
            <img src={this.state.XRayResult.URL} 
                alt="chest X-Ray" height="200" width="200"></img>
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </div>
    )
  }
}

export default XRay;