const proxy = require('http-proxy-middleware')

module.exports = function(app) {
    // endpoints
    app.use(proxy([
        // '/',
        // '/skills',
        // '/portfolio',
        // '/contact',
        '/api',
    ], { target: 'http://localhost:3333'}))
};