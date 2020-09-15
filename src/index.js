require('dotenv').config();
const express = require('express');
const app = express();
const router = express.Router();
const bodyParser = require('body-parser');
const PORT = process.env.PORT | 3000;
const tokenChecker = require('./utils/tokenChecker');
var multer = require('multer');

const authRoutes = require( './components/auth/auth.routes');
const volunteerRoutes = require( './components/volunteers/volunteers.routes');
const donationsRoutes = require( './components/donations/donations.routes');

var upload = multer();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.json());

// parse multipart/form-data for importing csv file
app.use(upload.array()); 

router.use('/auth', authRoutes);
router.use('/volunteer', tokenChecker, volunteerRoutes);
router.use('/donation', tokenChecker, donationsRoutes);
router.use('/healthcheck', (req, res) => {res.status(200).send('alive!!!') });

app.use(router);

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}.`);
});
