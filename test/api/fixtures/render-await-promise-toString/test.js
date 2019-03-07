var nodePath = require("path");

exports.check = (marko, markoCompiler, expect, snapshot, done) => {
    var template = marko.load(nodePath.join(__dirname, "template.marko"));

    template
        .render({
            userPromise: new Promise(resolve => {
                setTimeout(() => {
                    resolve({ name: "John" });
                }, 10);
            })
        })
        .then(result => {
            process.nextTick(() => {
                snapshot(result.toString());
                done();
            });
        });
};
