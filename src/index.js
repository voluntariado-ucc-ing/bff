require('dotenv').config();
const express = require('express');
const app = express();
const router = express.Router();
const bodyParser = require('body-parser');
const PORT = process.env.PORT | 3000;
const tokenChecker = require('./utils/tokenChecker');

const authRoutes = require( './components/auth/auth.routes');
const volunteerRoutes = require( './components/volunteers/volunteers.routes');
const donationsRoutes = require( './components/donations/donations.routes');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

router.use('/auth/', authRoutes);
router.use('/volunteer/', tokenChecker, volunteerRoutes);
router.use('/donations/', tokenChecker, donationsRoutes);

app.use(router);

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}.`);
});
