exports.dir = "a/b/c";

exports.before = taglibFinder => {
    taglibFinder.excludePackage("excluded-dependency");
};

exports.after = taglibFinder => {
    taglibFinder.reset();
};
