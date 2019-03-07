var nodePath = require("path");

exports.check = (marko, markoCompiler, expect, helpers, done) => {
    var template = marko.load(nodePath.join(__dirname, "template.marko"));
    expect(() => {
        template.renderToString({ name: "John" });
    }).to.throw("beginAsync() not allowed when using renderSync()");
    done();
};
