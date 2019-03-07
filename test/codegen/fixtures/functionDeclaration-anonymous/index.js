"use strict";

module.exports = builder => {
    return builder.functionDeclaration(
        null,
        ["num1", "num2"],
        [builder.returnStatement(builder.binaryExpression("num1", "+", "num2"))]
    );
};
