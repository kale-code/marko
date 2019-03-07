"use strict";

module.exports = builder => {
    var vars = builder.vars(["foo"]);

    vars.onBeforeGenerateCode(event => {
        event.insertCode(builder.functionCall("before", []));
    });

    vars.onAfterGenerateCode(event => {
        event.insertCode(builder.functionCall("after", []));
    });

    var ifStatement = builder.ifStatement("a > b", [
        builder.vars(["before"]),
        vars,
        builder.vars(["after"])
    ]);

    return ifStatement;
};
