var path = require("path");

exports.check = (marko, markoCompiler, expect, snapshot, done) => {
    var compiler = require("marko/compiler");
    var templatePath = path.join(__dirname, "template.marko");

    compiler.compileFileForBrowser(
        templatePath,
        {
            writeVersionComment: false
        },
        (err, compiledTemplate) => {
            var code = compiledTemplate.code;
            code = code.replace(/marko\/dist\//g, "marko/src/");
            snapshot(code, ".js");
            done();
        }
    );
};
