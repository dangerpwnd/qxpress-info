import React, {Component} from "react";
import {CSVLink} from "react-csv";
import shortid from "shortid";
import axios from "../../axios-stage";
import Input from "../../Components/UI/Input/Input";
import Button from "../../Components/UI/Button/Button";
import "./Stages.css";

class stages extends Component {

  state = {
    stageForm: {
      address: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Street Address'
        },
        value: ''
      },
      startDate: {
        elementType: 'input',
        elementConfig: {
          type: 'date',
          placeholder: 'Start Date'
        },
        value: ''
      },
      endDate: {
        elementType: 'input',
        elementConfig: {
          type: 'date',
          placeholder: 'End Date'
        },
        value: ''
      },
      stage: {
        elementType: 'select',
        elementConfig: {
          options: [
            {value: 'Select Stage', displayValue: 'Select Stage'},
            {value: 'Rough', displayValue: 'Rough'},
            {value: 'Topout', displayValue: 'Topout'},
            {value: 'Trim', displayValue: 'Trim'}
          ]
        },
        value: ''
      }
    },
    jobData: []
  };

  inputChangeHandler = (event, inputId) => {
    
    const updatedForm = {
      ...this.state.stageForm
    };
    
    const updatedFormElement = {
      ...updatedForm[inputId]
    };

    updatedFormElement.value = event.target.value;
    updatedForm[inputId] = updatedFormElement;
    this.setState({stageForm: updatedForm});

  };

  submitFormHandler = (event) => {
    event.preventDefault();
    let formData = {};
    for (let formElementId in this.state.stageForm){
      formData[formElementId] = this.state.stageForm[formElementId].value;
    }

    // If address and dates are used, GET from endpoint

    if (formData.address && formData.startDate && formData.endDate){
      axios.get('/' + formData.address + '/'+ formData.startDate + '/' + formData.endDate + '/' + formData.stage)
        .then((resp) => {
          resp.data.length !== 0 ? 
          this.setState({jobData : resp.data}): 
          alert("No data available");
        })
        .catch((err) => {
          console.log(err);
        })
        .then (() => {
          this.setState({stageForm: {
            address: {
              elementType: 'input',
              elementConfig: {
                type: 'text',
                placeholder: 'Street Address'
              },
              value: ''
            },
            startDate: {
              elementType: 'input',
              elementConfig: {
                type: 'date',
                placeholder: 'Start Date'
              },
              value: ''
            },
            endDate: {
              elementType: 'input',
              elementConfig: {
                type: 'date',
                placeholder: 'End Date'
              },
              value: ''
            },
            stage: {
              elementType: 'select',
              elementConfig: {
                options: [
                  {value: 'Select Stage', displayValue: 'Select Stage'},
                  {value: 'Rough', displayValue: 'Rough'},
                  {value: 'Topout', displayValue: 'Topout'},
                  {value: 'Trim', displayValue: 'Trim'}
                ]
              },
              value: ''
            }
          }      
        })
        });
    }

    // If address is used, GET from endpoint
    if(formData.address){
      axios.get('/' + formData.address)
        .then((resp) => {
          resp.data.length !== 0 ? 
          this.setState({jobData : resp.data}): 
          alert("No data available");
        })
        .catch((err) => {
          console.log(err);
        })
        .then (() => {
          this.setState({stageForm: {
            address: {
              elementType: 'input',
              elementConfig: {
                type: 'text',
                placeholder: 'Street Address'
              },
              value: ''
            },
            startDate: {
              elementType: 'input',
              elementConfig: {
                type: 'date',
                placeholder: 'Start Date'
              },
              value: ''
            },
            endDate: {
              elementType: 'input',
              elementConfig: {
                type: 'date',
                placeholder: 'End Date'
              },
              value: ''
            },
            stage: {
              elementType: 'select',
              elementConfig: {
                options: [
                  {value: 'Select Stage', displayValue: 'Select Stage'},
                  {value: 'Rough', displayValue: 'Rough'},
                  {value: 'Topout', displayValue: 'Topout'},
                  {value: 'Trim', displayValue: 'Trim'}
                ]
              },
              value: ''
            }
          }      
        })
        });
    }

    // If dates are used , GET from endpoint
    if (formData.startDate && formData.endDate){
      axios.get('/'+ formData.startDate + '/' + formData.endDate + '/' + formData.stage)
        .then((resp) => {
          resp.data.length !== 0 ? 
          this.setState({jobData : resp.data}): 
          alert("No data available");
        })
        .catch((err) => {
          console.log(err);
        })
        .then (() => {
          this.setState({stageForm: {
            address: {
              elementType: 'input',
              elementConfig: {
                type: 'text',
                placeholder: 'Street Address'
              },
              value: ''
            },
            startDate: {
              elementType: 'input',
              elementConfig: {
                type: 'date',
                placeholder: 'Start Date'
              },
              value: ''
            },
            endDate: {
              elementType: 'input',
              elementConfig: {
                type: 'date',
                placeholder: 'End Date'
              },
              value: ''
            },
            stage: {
              elementType: 'select',
              elementConfig: {
                options: [
                  {value: 'Select Stage', displayValue: 'Select Stage'},
                  {value: 'Rough', displayValue: 'Rough'},
                  {value: 'Topout', displayValue: 'Topout'},
                  {value: 'Trim', displayValue: 'Trim'}
                ]
              },
              value: ''
            }
          }      
        })
        });
    }
  }

  render() {
    const formElementArray = [];
    for (let key in this.state.stageForm){
      formElementArray.push({
        id: key,
        config: this.state.stageForm[key]
      });
    }
    let jobResults = this.state.jobData;
    const headers = 
    [
      {field:"job_Date", label:"Date"},
      {field: "job_Site", label:"Address"},
      {field:"job_City", label: "City"},
      {field:"job_Stage", label:"Stage"},
    ];

    return (
      <div className="FlexStages">
          <form className="FlexForm" onSubmit={this.submitFormHandler}>
            {formElementArray.map(formElement => (
              <Input 
                key={formElement.id}
                elementType={formElement.config.elementType} 
                elementConfig={formElement.config.elementConfig} 
                value={formElement.config.value}
                changed={(event) => this.inputChangeHandler(event, formElement.id)} />
            ))}
            <Button type="submit" btnType="Success">Pull Data</Button>
            <CSVLink data={jobResults} style={{backgroundColor:"transparent", color: "white", outline: "none", cursor: "pointer", font: "inherit", fontWeight: "bold"}}>Download Results</CSVLink>
          </form>
          <div className="FlexForm">
            <table className="ResultsTable">
             <thead>
              <tr className="ResultsHeader">
                {headers.map((header, i) => 
                  <th key={i}>{header.label}</th>
                )}
               </tr>
              </thead>
              <tbody>
                {jobResults.map((job, i) => (
                  <tr className="ResultsRow" key={i}>
                  <td key={shortid.generate()}>{job.job_Date}</td>
                  <td key={shortid.generate()}>{job.job_Site}</td>
                  <td key={shortid.generate()}>{job.job_City}</td>
                  <td key={shortid.generate()}>{job.job_Stage}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
      </div>
    );
  }
}

export default stages;
