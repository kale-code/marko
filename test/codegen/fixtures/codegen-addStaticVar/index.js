"use strict";

module.exports = (builder, codegen) => {
    var templateRoot = builder.templateRoot([builder.htmlElement("div", [])]);

    codegen.addStaticVar("foo", builder.literal("Hello World"));

    return templateRoot;
};
