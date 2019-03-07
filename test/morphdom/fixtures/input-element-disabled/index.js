exports.verify = (context, expect) => {
    var rootNode = context.rootNode;
    expect(rootNode.disabled).to.equal(true);
};
