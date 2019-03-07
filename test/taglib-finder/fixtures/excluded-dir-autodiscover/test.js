var nodePath = require("path");

exports.dir = "a/b";

exports.before = taglibFinder => {
    taglibFinder.excludeDir(nodePath.join(__dirname, "a/b"));
    taglibFinder.excludeDir(nodePath.join(__dirname, "a/components"));
};

exports.after = taglibFinder => {
    taglibFinder.reset();
};
