var nodePath = require("path");

exports.check = (marko, markoCompiler, expect, snapshot, done) => {
    var runtimeHtml = require("marko/html");

    var out = runtimeHtml.createWriter();
    out.on("finish", result => {
        snapshot(result.getOutput());
        done();
    }).on("error", e => {
        done(e);
    });

    var template = marko.load(nodePath.join(__dirname, "template.marko"));
    template.render(
        {
            name: "John"
        },
        out
    );

    out.end();
};
