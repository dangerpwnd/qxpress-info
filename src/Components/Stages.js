import React from "react";
import Rough from "./Stages/Rough/Rough";
import Topout from "./Stages/Topout/Topout";
import Trim from "./Stages/Trim/Trim";

const stages = (props) =>
  props.stages.map((job, index) => {
    if (job.stage === "Rough") {
      return (
        <Rough
          address={job.address}
          startDate={job.startDate}
          endDate={job.endDate}
          changeAddress={(event) => props.changeAddress(event, job.id)}
          changeStartDate={(event) => props.changeStartDate(event, job.id)}
          changeEndDate={(event) => props.changeEndDate(event, job.id)}
          // search={() => props.search(job.address, job.startDate, job.endDate)}
          // click={() => props.clicked(index)}
          key={job.id}
        />
      );
    } else if (job.stage === "Topout") {
      return (
        <Topout
          address={job.address}
          changed={(event) => props.changed(event, job.id)}
          click={() => props.clicked(index)}
          key={job.id}
        />
      );
    } else {
      return (
        <Trim
          address={job.address}
          changed={(event) => props.changed(event, job.id)}
          click={() => props.clicked(index)}
          key={job.id}
        />
      );
    }
  });

export default stages;
