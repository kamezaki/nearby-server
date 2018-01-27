import * as errorHandler from 'errorhandler';

const app = require('./app');

app.use(errorHandler());

/*
 * Start express server
 */
const port = app.get('port') || 8000;
const server = app.listen(port, () => {
    console.log(('  App is running at http://localhost:%d in %s mode'), port, app.get('env'));
    console.log('  Press CTRL-C to stop\n');
  });

export = server;
