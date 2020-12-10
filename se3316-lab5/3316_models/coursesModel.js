var mongoose = require('mongoose');

const Courses_Schema_3316 = new mongoose.Schema({
    catalog_nbr: {
        type: String,
    },
    subject: {
        type: String,
    },
    className: {
        type: String,
    },
    course_info: [
        {

            class_nbr: {
                type: Number
            },
            start_time: {
                type: String,
            },
            descrlong: {
                type: String,
            },
            end_time: {
                type: String,
            },
            campus: {
                type: String,
            },
            facility_ID: {
                type: String,
            },
            days: {

                type: [String],

            },
            instructors: [],
            class_section: {
                type: String
            },
            ssr_component: {
                type: String
            },
            enrl_stat: {
                type: String
            },
            descr: {
                type: String
            }
        },
    ],
    catalog_description: {
        type: String
    }
})

module.exports = mongoose.model('Courses', Courses_Schema_3316)