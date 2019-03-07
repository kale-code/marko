var fs = require("fs");
var stripJsonComments = require("strip-json-comments");
var fsReadOptions = { encoding: "utf8" };

exports.readFileSync = path => {
    var json = fs.readFileSync(path, fsReadOptions);

    try {
        var taglibProps = JSON.parse(stripJsonComments(json));
        return taglibProps;
    } catch (e) {
        throw new Error(
            'Unable to parse JSON file at path "' + path + '". Error: ' + e
        );
    }
};
