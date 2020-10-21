import React, { Component } from "react";
import "./App.css";
import Stages from "../Components/Stages";

class App extends Component {


  state = {
    stages: [
      { id: 1, stage: "Rough", address: "", startDate: "", endDate: "" },
      { id: 2, stage: "Topout", address: "", startDate: "", endDate: "" },
      { id: 3, stage: "Trim", address: "", startDate: "", endDate: "" },
    ],
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


  render() {
    let stageJobs = null;

    if (this.state.showJobs) {
      stageJobs = (
        <div className="FlexStages">
          <Stages
            stages={this.state.stages}
            changeAddress={this.updateAddressHandler}
            changeStartDate={this.updateStartDateHandler}
            changeEndDate={this.updateEndDateHandler}
          />
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Qxpress Job Reports</h1>
        {stageJobs}
        <button onClick={() => null}>
          Pull Data
        </button>
      </div>
    );
  }
}

export default App;
