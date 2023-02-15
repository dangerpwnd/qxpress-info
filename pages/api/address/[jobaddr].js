import config from '../../../knexconf';
import nc from 'next-connect';

const knex = require('knex')(config);

const getJobsByAddress = nc().get((req, res) => {
  const knexQuery = () => {
    const { jobaddr } = req.query;
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
        res.sendDate(resp);
      })
      .catch((err) => {
        res.json(err);
      });
  };
  knexQuery();
});

export default getJobsByAddress;
