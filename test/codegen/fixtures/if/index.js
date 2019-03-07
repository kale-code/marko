"use strict";

module.exports = builder => {
    var program = builder.program;
    var ifStatement = builder.ifStatement;
    var strictEquality = builder.strictEquality;
    var assignment = builder.assignment;
    var literal = builder.literal;

    return program([
        ifStatement(strictEquality("a", "1"), [
            assignment("foo", literal("bar"))
        ])
    ]);
};
