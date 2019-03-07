var nodePath = require("path");

exports.check = (marko, markoCompiler, expect, helpers, done) => {
    var template = marko.load(nodePath.join(__dirname, "template.marko"));
    var output;
    var e;

    try {
        output = template.renderSync({
            nameDataProvider: (arg, callback) => {
                setTimeout(() => {
                    callback(null, "John");
                }, 100);
            }
        });
    } catch (_e) {
        e = _e;
    }

    expect(output).to.equal(undefined);
    expect(e).to.not.equal(undefined);
    done();
};
