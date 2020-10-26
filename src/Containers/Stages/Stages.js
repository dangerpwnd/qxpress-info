import React, {Component} from "react";
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

  displayResults = () => console.log(this.state.jobData);

  render() {
    const formElementArray = [];
    for (let key in this.state.stageForm){
      formElementArray.push({
        id: key,
        config: this.state.stageForm[key]
      });
    }
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
          </form>
          <button onClick={this.displayResults}>See Results</button>
      </div>
    );
  }
}

export default stages;
