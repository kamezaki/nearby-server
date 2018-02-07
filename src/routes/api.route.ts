import { Router } from 'express';
import * as cors from 'cors';
import * as bodyParser from 'body-parser';

const api: Router = Router();

api.use(cors());
api.get('/', function(req, res, next) {
    res.send('something message');
});

api.post('/token', function(req, res, next) {
    res.send('something to send');
});

export default api;