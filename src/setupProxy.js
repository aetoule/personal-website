const proxy = require('http-proxy-middleware');

module.exports = function(app) {
    // endpoints
    app.use(proxy('/send', { target: 'http://localhost:4000/'}));
    app.use(proxy('/api', { target: 'http://localhost:4000/'}));

};