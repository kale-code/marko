exports.createApp = (express, markoExpressPath) => {
    var app = express();
    var markoExpress = require(markoExpressPath);

    app.locals.foo = "APP";
    app.locals.bar = "APP";
    app.locals.baz = "APP";

    app.use(markoExpress());
    app.use((req, res, next) => {
        res.locals.foo = "RES";
        res.locals.bar = "RES";
        next();
    });

    return app;
};

exports.createController = template => {
    return (req, res) => {
        res.marko(template, { $global: { foo: "DATA" }, test: "HELLO" });
    };
};
