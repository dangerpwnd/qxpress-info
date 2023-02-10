import config from '../../../knexconf';
import nc from 'next-connect';

const knex = require('knex')(config);

const getAddress = nc().get((req, res) => {
  const knexQuery = () => {
    knex({ qx: 'QXInfo' }).where('qx.Job_Address');
  };
});
