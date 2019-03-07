var parseJavaScript = require("./parseJavaScript");

module.exports = (src, builder) => {
    return parseJavaScript(src, builder, true /* isExpression */);
};
