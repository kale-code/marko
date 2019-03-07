var through = require("through");

exports.check = (marko, markoCompiler, expect, snapshot, done) => {
    var output = "";
    var outStream = through(function write(data) {
        output += data;
    });

    outStream.on("end", () => {
        snapshot(output);
        done();
    });

    var template = require("./template.marko");
    template
        .stream({
            name: "John"
        })
        .pipe(outStream)
        .on("error", e => {
            done(e);
        });
};
