var nodePath = require("path");

exports.check = (taglibLoader, expect) => {
    var taglibPath = nodePath.join(__dirname, "marko.json");
    var tagPath = nodePath.join(__dirname, "tags/foo/marko-tag.json");

    expect(() => {
        taglibLoader.loadTaglibFromFile(taglibPath);
    }).to.throw(
        `Invalid option: INVALID ([${taglibPath} → <foo> → ${tagPath}]`
    );
};
