var nodePath = require("path");

exports.check = (marko, markoCompiler, expect, snapshot, done) => {
    var template = marko.load(nodePath.join(__dirname, "template.marko"));
    var data = {
        name: "John",
        $global: {
            greeting: "Greetings"
        }
    };
    template.render(data, (error, result) => {
        snapshot(result.toString());
        done();
    });
};
