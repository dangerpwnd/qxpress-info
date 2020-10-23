import React, {Component} from "react";
import Input from "../../Components/UI/Input/Input";
import Button from "../../Components/UI/Button/Button";

class stages extends Component {
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
    }
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

    return (
      <div className="FlexStages">
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
}

export default stages;
