"use strict";

module.exports = builder => {
    return builder.functionDeclaration(
        "upperCase",
        ["str"],
        [builder.returnStatement(builder.functionCall("str.toUpperCase"))]
    );
};
