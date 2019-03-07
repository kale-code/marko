var nodePath = require("path");

exports.check = (marko, markoCompiler, expect, snapshot, done) => {
    var template = marko.load(nodePath.join(__dirname, "template.marko"));
    template.renderToString({ name: "John" }, (err, html) => {
        snapshot(html);
        done();
    });
};
