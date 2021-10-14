import config from '../../../knexconf'
import nc from 'next-connect'

const knex = require('knex')(config);

const getJobsByTechs =  nc()
    .get((req, res) => {
        const { tech, start, end } = req.query;

        const knexQuery = () => {
            knex({qx: 'QXInfo'})
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

export default getJobsByTechs