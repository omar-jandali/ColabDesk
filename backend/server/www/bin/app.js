const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');
const helmet = require('helmet');


const database = require('../../../database/index.js');
const User = require('../../../database/models/User');
const Profile = require('../../../database/models/Profile');
const Detail = require('../../../database/models/Detail');
const Office = require('../../../database/models/Office');
const Space = require('../../../database/models/Space');
const Images = require('../../../database/models/Images');
const Amenities = require('../../../database/models/Amenities');
const SpaceAmenities = require('../../../database/models/SpaceAmenities');
const Reservation = require('../../../database/models/Reservation');


const router = require('../../Router/Router')


const app = express();


app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(morgan('dev'));


app.use('/api', router)


module.exports = app;