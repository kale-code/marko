"use strict";

module.exports = builder => {
    return builder.functionCall("console.log", [
        builder.literal("Hello"),
        builder.identifier("name")
    ]);
};
