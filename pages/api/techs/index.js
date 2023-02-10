import config from '../../../knexconf';
import nc from 'next-connect';

const knex = require('knex')(config);

const getTechs = nc().get((req, res) => {
  const knexQuery = () => {
    knex({ qx: 'Crews' })
      .select({
        CrewName: 'qx.Crew_Name',
      })
      .orderBy('qx.Crew_Name', 'asc')
      .then((resp) => {
        res.send(resp);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  knexQuery();
});

export default getTechs;
