import config from '../../../knexconf';
import nc from 'next-connect';

const knex = require('knex')(config);

const getListJobType = nc().get((req, res) => {
  const knexQuery = () => {
    knex({ qx: 'TransDescrip' })
      .where('Descrip_Descrip', 'Rough')
      .orWhere('Descrip_Descrip', 'Topout')
      .orWhere('Descrip_Descrip', 'Trim')
      .orWhere('Descrip_Descrip', 'Builder Service')
      .orWhere('Descrip_Descrip', 'Service')
      .orWhere('Descrip_Descrip', 'Builder Extras/Options')
      .select({
        JobType: 'qx.Descrip_Descrip',
      })
      .orderBy('qx.Descrip_Descrip', 'asc')
      .then((resp) => {
        res.send(resp);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  knexQuery();
});

export default getListJobType;
