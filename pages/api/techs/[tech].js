import config from '../../../knexconf';
import nc from 'next-connect';

const knexUpdated = require('knex')(config);
const knexArchive = require('knex')(configArchive);

const handleDateFormat = (resp) => {
  resp.forEach((col) => {
    const newDate = new Date(col.jobDate).toISOString().split('T')[0];
    col.jobDate = newDate;
  });
};

const getJobsByTechs = nc().get((req, res) => {
  const { tech, start, end } = req.query;
  const knexQuery = () => {
    console.log('Using Updated DB');
    knexUpdated({ qx: 'QXInfo' })
      .where('qx.Job_Crew', tech)
      .whereBetween('qx.Job_Date', [start, end])
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
        res.send(resp);
      })
      .catch((err) => {
        res.json(err);
      });
  };
  knexQuery();
});

export default getJobsByTechs;
