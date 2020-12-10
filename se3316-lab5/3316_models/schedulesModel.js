var mongoose = require('mongoose');

var Schedules_Schema_3316 = new mongoose.Schema({
    scheduleName: {
        type: String,

    },
    scheduleList: [
        {
            catalog_nbr: {
                type: String,


            },
            subject: {
                type: String

            }
        }
    ]
})

module.exports = mongoose.model('Schedules', Schedules_Schema_3316);