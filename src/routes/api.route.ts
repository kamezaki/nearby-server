import { Router } from 'express';
import * as cors from 'cors';

const api: Router = Router();

api.use(cors());
api.get('/', function(req, res, next) {
    res.send('something message');
});

export default api;