"use strict";

module.exports = builder => {
    return builder.functionDeclaration(
        builder.identifier("foo"),
        [builder.identifier("bar")],
        [builder.returnStatement()]
    );
};
