var nodePath = require("path");

exports.check = (taglibLoader, expect) => {
    var taglibPath = nodePath.join(__dirname, "marko.json");

    expect(() => {
        taglibLoader.loadTaglibFromFile(taglibPath);
    }).to.throw(`Invalid option: INVALID ([${taglibPath} → <test-hello>])`);
};
