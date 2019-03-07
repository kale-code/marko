exports.createApp = (express, markoExpressPath) => {
    var app = express();
    var markoExpress = require(markoExpressPath);

    app.use(markoExpress());

    return app;
};

exports.createController = () => {
    return (req, res) => {
        res.marko("home");
    };
};

exports.checkResponse = (response, expect) => {
    expect(response.statusCode).to.equal(500);
    expect(response.body).to.include("res.marko");
    expect(response.body).to.include("res.render");
};
