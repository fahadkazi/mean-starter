// app/routes.js

module.exports = function(app, router) {

    // server routes ===========================================================
    // handle things like api calls
    // authentication routes

    // sample api route
    router.route('/')
        .get(function(req, res) {
            res.json({ message: 'hooray! welcome to our api!' });
        });

    // REGISTER OUR ROUTES -------------------------------
    // all of our routes will be prefixed with /api
    app.use('/api', router);

    // frontend routes =========================================================
    // route to handle all angular requests
    app.get('*', function(req, res) {
        res.sendfile('./public/views/index.html'); // load our public/index.html file
    });

};