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

exports.checkResponse = (response, expect) => {
    expect(response.headers["content-type"]).to.equal(
        "text/html; charset=utf-8"
    );
    expect(response.body).to.equal("<div></div>");
};
