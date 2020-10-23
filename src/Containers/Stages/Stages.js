import React, {Component} from "react";
import axios from "../../axios-stage";
import Input from "../../Components/UI/Input/Input";
import Button from "../../Components/UI/Button/Button";

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
      }
    }
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
    const formData = {};
    for (let formElementId in this.state.stageForm){
      formData[formElementId] = this.state.stageForm[formElementId].value;
    }
    console.log(formData);
    if(formData.address){
      axios.get('/' + formData.address)
        .then((resp) => {
          console.log(resp);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    if (formData.startDate && formData.endDate){
      axios.get('/'+ formData.startDate + '/' + formData.endDate)
        .then((resp) => {
          console.log(resp);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    alert("Submit Complete!");
  }


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
          <form onSubmit={this.submitFormHandler}>
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
