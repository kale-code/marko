"use strict";

module.exports = builder => {
    var program = builder.program;

    return program([
        builder.forRange({
            params: ["i"],
            from: builder.literal(0),
            to: "myArray.length",
            step: builder.literal(2),
            body: [
                builder.functionCall("console.log", [builder.identifier("i")])
            ]
        })
    ]);
};
