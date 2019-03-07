"use strict";

module.exports = builder => {
    return builder.program([
        builder.node((node, codegen) => {
            var builder = codegen.builder;
            return builder.text(builder.literal("Hello World!"));
        })
    ]);
};
