require('dotenv').config();
const express = require('express');
const app = express();
const router = express.Router();
const bodyParser = require('body-parser');
const PORT = process.env.PORT | 3000;
const { verifyToken } = require('./components/auth/auth.controller');

const authRoutes = require( './components/auth/auth.routes');
const volunteerRoutes = require( './components/volunteers/volunteers.routes');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

router.use('/services/', authRoutes);
router.use('/services/volunteers', verifyToken, volunteerRoutes);

app.use(router);

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}.`);
});
