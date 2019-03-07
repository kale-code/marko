"use strict";

let fulfilled = false;

exports.createApp = (express, markoExpressPath) => {
    var app = express();
    var markoExpress = require(markoExpressPath);

    app.use(markoExpress());
    return app;
};

exports.createController = template => {
    return (req, res) => {
        return res.marko(template).then(() => {
            fulfilled = true;
        });
    };
};

exports.checkResponse = (response, expect) => {
    expect(fulfilled).to.equal(true);
    expect(response.body).to.equal("<div></div>");
};
