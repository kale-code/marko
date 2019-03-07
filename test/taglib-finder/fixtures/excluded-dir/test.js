var nodePath = require("path");

exports.dir = "a/b-excluded";

exports.before = taglibFinder => {
    taglibFinder.excludeDir(nodePath.join(__dirname, "a/b-excluded"));
};

exports.after = taglibFinder => {
    taglibFinder.reset();
};
