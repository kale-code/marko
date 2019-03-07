module.exports = builder => {
    var templateRoot = builder.templateRoot;
    var assignment = builder.assignment;

    return templateRoot([assignment("a", "1")]);
};
