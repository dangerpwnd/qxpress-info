import config from '../../../knexconf'
import nc from 'next-connect'

const knex = require('knex')(config);

const getJobsByStage =  nc()
    .get((req, res) => {
        const { stage, start, end } = req.query;

        const knexQuery = () => {
            knex({qx: 'QXInfo'})
            .where('qx.Job_Descrip', stage)
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
            })
            .then(resp => {
                res.send(resp)
            })
            .catch(err => {
                res.json(err)
            })
        }
        knexQuery();
        }  
    )

export default getJobsByStage