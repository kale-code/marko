"use strict";

module.exports = builder => {
    return builder.program([
        builder.ifStatement(builder.literal(true), [
            builder.code("var a = 1;\nvar b = 2;"),
            builder.assignment(builder.identifier("b"), builder.literal(3))
        ])
    ]);
};
