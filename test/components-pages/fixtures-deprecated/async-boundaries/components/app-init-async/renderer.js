var template = require("marko").load(require.resolve("./template.marko"));

exports.renderer = (input, out) => {
    template.render(input || {}, out);
};
