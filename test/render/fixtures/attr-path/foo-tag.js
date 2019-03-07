var fs = require("fs");

module.exports = (input, out) => {
    out.write("File: " + fs.readFileSync(input.file, { encoding: "utf8" }));
};
