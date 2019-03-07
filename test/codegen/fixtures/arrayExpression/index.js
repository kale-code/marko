"use strict";

module.exports = builder => {
    return builder.arrayExpression([
        builder.literal("hello"),
        builder.literal("world")
    ]);
};
