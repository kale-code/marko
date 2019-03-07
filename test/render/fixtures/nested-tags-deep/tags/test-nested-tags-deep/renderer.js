var template = require("./template.marko");

module.exports = (input, out) => {
    template.render(input, out);
};
