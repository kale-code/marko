var nodePath = require("path");

exports.check = function(taglibLoader, expect) {
    expect(() => {
        taglibLoader.loadTaglibFromFile(nodePath.join(__dirname, "marko.json"));
    }).to.throw('Error while applying option of "tags-dir"');
};
