import config from '../../../knexconf';
import nc from 'next-connect';

const knex = require('knex')(config);

// Handlers

// Logic to change format of date

const handleDateFormat = (dates) => {
  dates.forEach((col) => {
    const newDate = new Date(col.jobDate).toISOString().split('T')[0];
    col.jobDate = newDate;
  });
};

const getJobsByAddress = nc().get((req, res) => {
  const knexQuery = () => {
    console.log(req.query);
    const query = { ...req.query };

    for (let key in query) {
      if (query.hasOwnProperty(key)) {
        query[key] = query[key].replace(/ /g, '%');
      }
    }

    console.log(query);

    const { jobaddr } = query;

    knex({ qx: 'QXInfo' })
      .where('qx.Job_Address', 'like', `%${jobaddr}%`)
      .select({
        jobDate: 'qx.Job_Date',
        jobBuilder: 'qx.Job_Builder',
        jobAddress: 'qx.Job_Address',
        jobCity: 'qx.Job_City',
        jobPostal: 'qx.Job_Postal',
        jobStage: 'qx.Job_Descrip',
        jobNotes: 'qx.Job_Notes',
        jobColor: 'qx.Job_Color',
        jobCrew: 'qx.Job_Crew',
      })
      .then((resp) => {
        handleDateFormat(resp);
        console.log(resp);
        res.send(resp);
      })
      .catch((err) => {
        console.log(err);
        res.json(err);
      });
  };
  knexQuery();
});

export default getJobsByAddress;
