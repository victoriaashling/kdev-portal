import React , { Component }from 'react';
import { Label, Table } from 'semantic-ui-react';
import API from "../../utils/API";


class Drug extends Component{

  state ={
    DrugResult:[]
  } 

  componentDidMount(){
    this.loadBlood();
  }

  loadBlood = () =>{
    API.getLabresultDrug()
      .then(res => 
        // console.log(res.data)
        this.setState({
          DrugResult:
          res.data[0]
        })
        )
        .catch(err => console.log(err));
  }
  
  render(){
    return(
      <div>
        <h3>Drug Testing Result:</h3>

        <Table celled>
          <Table.Header>
              <Table.Row>
              <Table.HeaderCell> <p>Patient Name: {this.state.DrugResult.First_Name} {this.state.DrugResult.Last_Name}</p></Table.HeaderCell>
                <Table.Cell>
                <p>Effectiveness of Current Medications:</p>
                </Table.Cell>
              </Table.Row>
            </Table.Header>

            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Therapeutic Area</Table.HeaderCell>
                <Table.HeaderCell>Success Rate(%)</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              <Table.Row>
                <Table.Cell>
                <Label ribbon>Alzheimers: </Label>
                </Table.Cell>
                <Table.Cell>{this.state.DrugResult.Alzheimers}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Anglgesics(Cox-2): </Table.Cell>
                <Table.Cell>{this.state.DrugResult.Anglgesics}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Asthma: </Table.Cell>
                <Table.Cell>{this.state.DrugResult.Asthma}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Depression(SSRI): </Table.Cell>
                <Table.Cell>{this.state.DrugResult.Depression}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Diabetes: </Table.Cell>
                <Table.Cell>{this.state.DrugResult.Diabetes}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>HIV: </Table.Cell>
                <Table.Cell>{this.state.DrugResult.HIV}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Hypertension: </Table.Cell>
                <Table.Cell>{this.state.DrugResult.Hypertension}</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>

      </div>
    )
  }
};


export default Drug;