import React, { Component } from "react";
import "./App.css";
import Stages from "../Components/Stages";
import Input from "../Components/UI/Input/Input";
import Button from "../Components/UI/Button/Button";

class App extends Component {

  state = {
    stages: [
      { id: 1, stage: "Rough", address: "", startDate: "", endDate: "" },
      { id: 2, stage: "Topout", address: "", startDate: "", endDate: "" },
      { id: 3, stage: "Trim", address: "", startDate: "", endDate: "" },
    ],
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
      }
    },
    showJobs: true,
  };

  updateAddressHandler = (event, id) => {
    const jobIndex = this.state.stages.findIndex((j) => {
      return j.id === id;
    });

    const job = {
      ...this.state.stages[jobIndex],
    };

    job.address = event.target.value;

    const stages = [...this.state.stages];

    stages[jobIndex] = job;

    this.setState({ stages: stages });
  };

  updateStartDateHandler = (event, id) => {
    const jobIndex = this.state.stages.findIndex((j) => {
      return j.id === id;
    });

    const job = {
      ...this.state.stages[jobIndex],
    };

    job.startDate = event.target.value;

    const stages = [...this.state.stages];

    stages[jobIndex] = job;

    this.setState({ stages: stages });
  };

  updateEndDateHandler = (event, id) => {
    const jobIndex = this.state.stages.findIndex((j) => {
      return j.id === id;
    });

    const job = {
      ...this.state.stages[jobIndex],
    };

    job.endDate = event.target.value;

    const stages = [...this.state.stages];

    stages[jobIndex] = job;

    this.setState({ stages: stages });
  };

  inputChangeHandler = (event, inputId) => {
    console.log(event.target.value);
    
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
    const formData = {};
    for (let formElementId in this.state.stageForm){
      formData[formElementId] = this.state.stageForm[formElementId].value;
    }
  }


  render() {
    let stageJobs = null;
    const formElementArray = [];
    for (let key in this.state.stageForm){
      formElementArray.push({
        id: key,
        config: this.state.stageForm[key]
      });
    }

    if (this.state.showJobs) {
      stageJobs = (
        <div className="FlexStages">
          {/* <Stages
            stages={this.state.stages}
            changeAddress={this.updateAddressHandler}
            changeStartDate={this.updateStartDateHandler}
            changeEndDate={this.updateEndDateHandler}
          /> */}
          <form onSubmit={() => this.submitFormHandler}>
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
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Qxpress Job Reports</h1>
        {stageJobs}
      </div>
    );
  }
}

export default App;
