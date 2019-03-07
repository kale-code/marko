var nodePath = require("path");
var through = require("through");

exports.check = (marko, markoCompiler, expect, snapshot, done) => {
    var output = "";

    var stream = through(function write(data) {
        output += data;
    });

    stream
        .on("end", () => {
            snapshot(output);
            done();
        })
        .on("error", e => {
            done(e);
        });

    var template = marko.load(nodePath.join(__dirname, "template.marko"));
    template.render(
        {
            $global: {
                foo: "bar"
            }
        },
        stream
    );
};
