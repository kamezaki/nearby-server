import * as express from 'express';
import * as bodyParser from 'body-parser';

import apiRoutes from './routes/api.route';

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false}));

app.use('/api', apiRoutes);

module.exports = app;