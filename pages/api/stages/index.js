import config from '../../../knexconf'
import nc from 'next-connect'

const knex = require('knex')(config);
const today = new Date().toLocaleDateString();
const fullWeek =  new Date();
fullWeek.setDate(fullWeek.getDate() + 7);

const getJobsByStages =  nc()
    .get((req, res) => {
        const knexQuery = () => {
            knex({qx: 'QXInfo'})
            .whereBetween('qx.Job_Date', [today, fullWeek])
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
                console.log(err)
            })
        }
        knexQuery();
        }  
    )

export default getJobsByStages