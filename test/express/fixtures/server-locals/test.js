exports.createApp = (express, markoExpressPath) => {
    var app = express();
    var markoExpress = require(markoExpressPath);

    app.locals.foo = "FOO";

    app.use(markoExpress());
    app.use((req, res, next) => {
        res.locals.bar = "BAR";
        next();
    });

    return app;
};

exports.createController = template => {
    return (req, res) => {
        res.marko(template);
    };
};
