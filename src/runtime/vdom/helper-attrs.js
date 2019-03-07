/**
 * Helper for processing dynamic attributes
 */
module.exports = attributes => {
    if (attributes && (attributes.style || attributes.class)) {
        var newAttributes = {};
        Object.keys(attributes).forEach(name => {
            if (name === "class") {
                newAttributes[name] = classAttr(attributes[name]);
            } else if (name === "style") {
                newAttributes[name] = styleAttr(attributes[name]);
            } else {
                newAttributes[name] = attributes[name];
            }
        });
        return newAttributes;
    }
    return attributes;
};

var styleAttr = require("./helper-styleAttr");
var classAttr = require("./helpers").ca;
