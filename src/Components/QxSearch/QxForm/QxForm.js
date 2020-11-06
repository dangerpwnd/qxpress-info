import React, {useState} from 'react';
import Input from "../../UI/Input/Input";
import axios from "../../../axios-stage";


const QxForm = (props) => {

    const [qxForm, setQxForm] = useState({
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
    });
    const [jobData, setJobData] = useState([]);

    const inputChangeHandler = (event, inputId) => {
        const updatedForm = {...qxForm};
        const updatedFormElement = {...updatedForm[inputId]};

        updatedFormElement.value = event.target.value;
        updatedForm[inputId] = updatedFormElement;
        setQxForm({updatedForm});
    };

    const submitFormHandler = (event) => {
        event.preventDefault();
        let formData = {};
        for (let formElementId in qxForm){
          formData[formElementId] = qxForm[formElementId].value;
        }
        if(formData.startDate === ''){
          formData.startDate = "2000-01-01"
        }
        if(formData.endDate === ''){
          formData.endDate = "2050-01-01"
        }
        
        if(formData.address === ''){
          axios.get('/'+ formData.startDate + '/' + formData.endDate + '/' + formData.stage)
            .then((resp) => {
              resp.data.length !== 0 ? 
              setJobData({jobData : resp.data}): 
              alert("No data available");
            })
            .catch((err) => {
              console.log(err);
            })
            .then (() => {
              setJobData([]);
            });
        } else {
          axios.get('/' + formData.address + '/'+ formData.startDate + '/' + formData.endDate + '/' + formData.stage)
            .then((resp) => {
              resp.data.length !== 0 ? 
              setJobData({jobData : resp.data}): 
              alert("No data available");
            })
            .catch((err) => {
              console.log(err);
            })
            .then (() => {
              setJobData([]);
            });
        }
      };

    return (
        <>
            <form onSubmit={submitFormHandler}>
                <label>Street Address</label>
                <input type="text" changed={inputChangeHandler}></input>
                <label>Start Date</label>
                <input type="date" changed={inputChangeHandler}></input>
                <label>End Date</label>
                <input type="date" changed={inputChangeHandler}></input>
                <label>Stage</label>
                <select changed={inputChangeHandler}>
                    <option value="Rough">Rough</option>
                    <option value="Topout">Topout</option>
                    <option value="Trim">Trim</option>
                </select>
                <button type="submit">Pull Data</button>
            </form>
        </>
    );
}

export default QxForm;