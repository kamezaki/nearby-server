import * as express from 'express';

import apiRoutes from './routes/api.route';

const app = express();

app.use('/api', apiRoutes);

module.exports = app;