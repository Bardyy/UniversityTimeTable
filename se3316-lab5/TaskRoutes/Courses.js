const express = require('express');
const router = express.Router();
const Courses = require('../3316_models/coursesModel');
const Schedules = require('../3316_models/schedulesModel');

// TASK1

router.get('/', async (req, res) => {
    var response = []
    const courses = await Courses.find();
    courses.forEach(course => {
        response.push({ SubjectName: course.subject, ClassName: course.className, CatalogNumber: course.catalog_nbr })

    })

    return res.send(response);
});

router.get('/testing123', async (req, res) => {
    var response = []
    const courses = await Courses.find();
    courses.forEach(course => {
        response.push({ test: course.catalog_nbr })

    })

    return res.send(response);
});

router.get('/ECE/2277a', async (req, res) => {
    var response = []
    const courses = await Courses.find();
    courses.forEach(course => {
        response.push({ BINGO: course.catalog_nbr })

    })

    return res.send(response);
});
//TASK2

router.get('/:subjectCode', async (req, res) => {

    var courses = await Courses.find({ subject: req.params.subjectCode.toUpperCase() });
    if (req.params.subjectCode.length > 10) return res.status(404).send('Subject code is invalid');
    if (courses.length === 0) {

        return res.status(404).send('Incorrect Subject Code')
    }
    var response = []
    courses.forEach(course => {
        response.push({ CatalogNumber: course.catalog_nbr });

    })
    return res.send(response);

});

//TASK3

router.get('/:subjectCode/:catalog_nbr/schedule/', async (req, res) => {
    var subjectExists = false;
    var courseExists = false;
    var courses = await Courses.find()
    if (req.params.subjectCode.length > 10 || req.params.catalog_nbr.length > 10) return res.status(404).send('Invalid Input');

    courses.forEach(course => {
        if (course.subject === req.params.subjectCode.toUpperCase()) subjectExists = true;
        if (course.catalog_nbr.toString() === req.params.catalog_nbr.toUpperCase()) courseExists = true;
    })
    if (subjectExists === false) return res.status(404).send('Invalid Subject Code');
    if (courseExists === false) return res.status(404).send('Invalid Course Code');

    if (req.query.component === undefined) {
        courses = courses.filter(course => course.subject === req.params.subjectCode.toUpperCase() && course.catalog_nbr === req.params.catalog_nbr.toUpperCase());
        var course = courses[0]
        return res.send(course);

    } else {

        courses = courses.filter(course => course.subject === req.params.subjectCode.toUpperCase() && course.catalog_nbr === req.params.catalog_nbr.toUpperCase());
        var course = courses[0]
        var information = course.course_info

        information = information.filter(function (val) {
            return val.ssr_component === req.query.component.toUpperCase();
        });

        return res.send(information);
    }
});

//TASK4

router.post('/schedule', async (req, res) => {
    if (/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(req.body.scheduleName)) return res.status(404).send('Illegal Characters Inserted');
    var schedule_task4 = await Schedules.findOne({ scheduleName: req.body.scheduleName });
    if (schedule_task4) return res.status(404).send('This Schedule Already Exists');
    schedule_task4 = await Schedules.create({ scheduleName: req.body.scheduleName });
    return res.send(schedule_task4);
});

//TASK5

router.put('/schedule/:schedule_name', async (req, res) => {

    var schedule_task5 = await Schedules.findOne({ scheduleName: req.params.schedule_name });

    if (!schedule_task5) return res.status(404).send('The requested schedule is not available');

    schedule_task5.scheduleList = req.body.scheduleList;
    schedule_task5.save();

    return res.send(schedule_task5);
});

//TASK6

router.get('/schedule/:schedule_name', async (req, res) => {

    if (req.params.schedule_name.length > 10) return res.status(404).send('Invalid Input');
    var schedule_task6 = await Schedules.findOne({ scheduleName: req.params.schedule_name });

    if (!schedule_task6) return res.status(404).send('That schedule does not exist');

    return res.send(schedule_task6.scheduleList);
});

//TASK7

router.delete('/schedule/:schedule_name', async (req, res) => {


    var schedule_task7 = await Schedules.findOne({ scheduleName: req.params.schedule_name });

    if (!schedule_task7) return res.status(404).send('That schedule does not exist');
    schedule_task7.remove();
    schedule_task7.save();
    return res.send('The Schedule Has Been Deleted');
});

//TASK8

router.get('/schedule/list/amount', async (req, res) => {
    var response = []

    var schedule_task8 = await Schedules.find();
    schedule_task8.forEach(schedule => {
        response.push({ scheduleName: schedule.scheduleName, courses: schedule.scheduleList.length })
    })


    return res.send(response);
});

//TASK9

router.delete('/schedule', async (req, res) => {
    await Schedules.remove();
    return res.send('All schedules have been deleted');

});

module.exports = router;