"use strict";

module.exports = builder => {
    return builder.newExpression(builder.identifier("Foo"), [
        builder.literal("Frank"),
        builder.literal("human")
    ]);
};
