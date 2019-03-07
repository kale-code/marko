var template = require("marko").load(require.resolve("./template.marko"));

exports.render = (input, out) => {
    template.render({}, out);
};
