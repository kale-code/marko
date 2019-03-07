var template = require("./template.marko");

exports.renderer = (input, out) => {
    template.render({}, out);
};
