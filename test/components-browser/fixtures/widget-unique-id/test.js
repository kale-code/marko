var expect = require("chai").expect;

module.exports = helpers => {
    var components = [];

    function renderComponent() {
        var component = helpers.mount(require.resolve("./index"), {});
        components.push(component);
    }

    renderComponent();
    renderComponent();
    renderComponent();

    var ids = {};
    components.forEach(component => {
        ids[component.id] = true;
    });

    expect(components.length).to.equal(3);
    expect(Object.keys(ids).length).to.equal(components.length);
};
