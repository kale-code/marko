"use strict";

module.exports = builder => {
    return builder.negate(builder.identifier("foo"));
};
