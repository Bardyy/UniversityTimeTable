const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
app.use(cors());
app.use(express.static(path.join(__dirname, 'dist/se3316-lab5')));

app.get('*', (req, res) => { res.sendFile(path.join(__dirname, 'dist/se3316-lab5/index.html')); });



const connect = mongoose.connect('mongodb+srv://Bardy:Bardia1234.@cluster0.lemce.mongodb.net/<dbname>?retryWrites=true&w=majority',
    {
        useNewUrlParser: true, useUnifiedTopology: true,
        useCreateIndex: true, useFindAndModify: false
    })
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));


const courses = require('./TaskRoutes/Courses');
const port = process.env.PORT || 3000;
app.use(express.json({ limit: '1mb' }));
app.use('/api/courses', courses);




app.use('/', express.static('frontend'));


app.listen(port, () => console.log(`Listening on port ${port}..`));

