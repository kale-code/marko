module.exports = helpers => {
    return helpers.vdom
        .createElement("div", 0 /* attrCount */, 2 /* childCount */)
        .e("span", null, 1)
        .e("p", null, 1)
        .e("a", null, 0);
};
