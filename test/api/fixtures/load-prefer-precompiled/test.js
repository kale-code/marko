var nodePath = require("path");

exports.check = (marko, markoCompiler, expect, helpers, done) => {
    var templatePath = nodePath.join(__dirname, "dummy.marko");
    var template = marko.load(templatePath);
    expect(template).to.equal("SHOULD LOAD");
    done();
};
