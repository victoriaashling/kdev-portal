import React, { PureComponent } from "react";
import { Container, Row, Col } from "../../components/Grid";
import { Input, ReadOnlyInput, FormBtn } from "../../components/Form";
import FormAPI from "../../utils/FormAPI";
import AuthAPI from "../../utils/AuthAPI";
import FormFields from "./identifyinginfo.json";
import "./IdentifyingInfoForm.css";

class IdentifyingInfoForm extends PureComponent {

  state = {
    formData: {},
    returnedFields: [],
    currentUserID: null,
    existingProfile: false,
    profileID: null
  }

  componentDidMount() {
    this.getCurrentUser();
  }

  getCurrentUser = () => {
    AuthAPI.getCurrentUser()
      .then(res => {
        let currentUserID = res.data._id;
        this.setState({ currentUserID: currentUserID }, this.updateFormData(currentUserID));
      })
      .catch(err => console.log(err));
  }

  updateFormData = (currentUserID) => {
    FormAPI.getCurrentData(currentUserID)
    .then(response => {
      if (response.data) {
        this.setState({ existingProfile: true, profileID: response.data._id })
        let keys = Object.keys(response.data);  //couldn't just filter over an object, it had to be an array -- there may be a better way to do this
        let newStateObj = keys.filter(key => {
          return (key !== "__v" && key !== "_id" && key !== "patientID") //take out the fields we don't want in our formData object
        }).map(key => {
          return {key: key, value: response.data[key]}
        })
        newStateObj.map(item => {
          if (item.value != null) {
            this.setState({ returnedFields: [...this.state.returnedFields, item.key] })
          }
          return this.setState({ formData: { ...this.state.formData, [item.key]: item.value }});
        })
      }
    })
    .catch(err => console.log(err));
  }

  handleInputChange = event => {
    let { name, value } = event.target;
    this.setState({ formData: { ...this.state.formData, [name]: value }});
  }

  handleEdit = event => {                 //this will change an input from readonly to editable
    let field = event.currentTarget.id;
    let newReturnedFields = this.state.returnedFields.filter(item => {
      return (item !== field)
    });
    this.setState({ returnedFields: newReturnedFields });
  }

  handleSubmit = event => {
    event.preventDefault();

    if (this.state.existingProfile) {
      FormAPI.updateForm(this.state.profileID, this.state.formData)
        .then(res => {
          document.getElementById("identifyingInfoForm").reset();
          this.updateFormData(this.state.currentUserID);
        })
        .catch(err => console.log(err))
    }
    else {
      FormAPI.submitForm(this.state)
        .then(res => {
          document.getElementById("identifyingInfoForm").reset();
          this.updateFormData(this.state.currentUserID);
        })
        .catch(err => console.log(err))
    }
  }

  render() {
    return (
      <Container classes="yellow-back">
        <h1>{FormFields.header.title}</h1>
        <h4>{FormFields.header.subtext}</h4>
        <br />
        <form id="identifyingInfoForm">
          {FormFields.sections.map((section, sindex) => (
            <div key={`section${sindex}`}>
              <h1 className="form-section-header">{section.sectionheader}</h1>
              <hr className="section-header-underline" />
              <div className="form-section" >
                {section.rows.map((row, rindex) => (
                  <Row key={`section${sindex}-row${rindex}`}>
                    {row.cols.map((col, cindex) => {
                      if (this.state.returnedFields.includes(col.fieldName)) {
                        return (
                          <Col size={col.size} key={`section${sindex}-row${rindex}-col${cindex}`}>
                              <ReadOnlyInput 
                                label={col.label}
                                name={col.fieldName}
                                id={col.fieldName}
                                value={this.state.formData[col.fieldName] || ""}
                                onClick={this.handleEdit}
                                readOnly
                              />
                          </Col>
                        )
                      }
                      return (
                        <Col size={col.size} key={`section${sindex}-row${rindex}-col${cindex}`}>
                          <Input 
                            label={col.label}
                            name={col.fieldName}
                            onChange={this.handleInputChange}
                            required={col.required ? true : false}
                            value={this.state.formData[col.fieldName] || ""}
                            placeholder={col.format}
                          />
                        </Col>
                      )
                    })}
                  </Row>
                ))}
              </div>
            </div>
          ))}
          <FormBtn onClick={this.handleSubmit} type="submit">Submit</FormBtn>
        </form> 
      </Container>
    )
  }
}

export default IdentifyingInfoForm;