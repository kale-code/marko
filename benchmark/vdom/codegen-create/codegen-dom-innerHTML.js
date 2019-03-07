module.exports = () => {
    return `
    var fragment = range.createContextualFragment(html);
    return fragment.childNodes[0];`;
};

module.exports.generateInitCode = (node, html) => {
    return `
var range = document.createRange();
range.selectNode(document.body);
var html = ${JSON.stringify(html)};
`;
};
