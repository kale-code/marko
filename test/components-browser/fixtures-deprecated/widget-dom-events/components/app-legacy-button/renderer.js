var template = require("marko").load(require.resolve("./template.marko"));

module.exports = (input, out) => {
    template.render(input, out);
};
