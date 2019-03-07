"use strict";

module.exports = builder => {
    return builder.concat(builder.identifier("a"), builder.identifier("b"));
};
