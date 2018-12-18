import React , { Component }from 'react';
import { Table } from 'semantic-ui-react';
import API from "../../utils/API";


class Blood extends Component{

  state ={
    BloodResult:[]
  }

  componentDidMount(){
    this.loadBlood();
  }

  loadBlood = () =>{
    API.getLabresultBlood()
      .then(res => 
        this.setState({
          BloodResult:
          res.data[0]
        })
      )
      .catch(err => console.log(err));
  }

  render(){
    
    return ( 
      <div>
        <h3 id="center">Blood Testing Result:</h3>
        <Table celled inverted selectable>
          <Table.Header>
            <Table.Row>
              <Table.Cell>1.First Name:{this.state.BloodResult.First_Name}</Table.Cell>
              <Table.Cell>2.Last Name:{this.state.BloodResult.Last_Name}</Table.Cell>
              <Table.Cell>3.Insurances:{this.state.BloodResult.Insurances}</Table.Cell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            <Table.Row>
              <Table.Cell>4.Time:{this.state.BloodResult.Time}</Table.Cell>
              <Table.Cell>5.Age:{this.state.BloodResult.Age}</Table.Cell>
              <Table.Cell>6.Gender:{this.state.BloodResult.Gender}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>7.White Blood Cell:{this.state.BloodResult.WBC}</Table.Cell>
              <Table.Cell>8.Red Blood Cell:{this.state.BloodResult.RBC}</Table.Cell>
              <Table.Cell>9. Hemoglobin:{this.state.BloodResult.HB}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>10.Hematocrit:{this.state.BloodResult.HCT}</Table.Cell>
              <Table.Cell>11.Mean Cell Volume:{this.state.BloodResult.MCV}</Table.Cell>
              <Table.Cell>12.Mean Cell Hemoglobin:{this.state.BloodResult.MCH}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>13.Mean Cell Hb Conc:{this.state.BloodResult.MCHC}</Table.Cell>
              <Table.Cell>14.Red Cell Dist Width:{this.state.BloodResult.RDW}</Table.Cell>
              <Table.Cell>15. Platelet count:{this.state.BloodResult.Platelet}</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </div>
    )
  }
}

export default Blood;