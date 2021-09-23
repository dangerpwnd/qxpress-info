import config from '../../../knexconf'

export default function getJobsByStage (req, res) {
    if(req.method !== 'GET'){
        res.status(500).json({message: 'Only GET requests accepted'})
    }

    const knex = require('knex')(config);

    knex({qx: 'QXInfo'})
        .select({
            jobDate: 'qx.Job_Date',
            jobBuilder: 'qx.Job_Builder',
            jobAddress: 'qx.Job_Address',
            jobCity: 'qx.Job_City',
            jobPostal: 'qx.Job_Postal',
            jobStage: 'qx.Job_Descrip',
            jobNotes: 'qx.Job_Notes'
            // jobColor: 'qx.Job_Color'
        })
        .then((resp) => {
            return resp;
        })
        .catch((err) => {
            return err;
        });


}