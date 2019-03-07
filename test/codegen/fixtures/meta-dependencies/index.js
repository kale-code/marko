"use strict";

module.exports = (builder, codegen) => {
    var context = codegen.context;

    var templateRoot = builder.templateRoot([builder.htmlElement("div", [])]);

    context.useMeta = true;
    context.addDependency("./foo");

    return templateRoot;
};
