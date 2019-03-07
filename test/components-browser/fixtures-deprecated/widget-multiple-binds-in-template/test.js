var expect = require("chai").expect;

module.exports = helpers => {
    var widgetsLookup = {};
    window.addWidget = (name, widget) => {
        var widgets = widgetsLookup[name] || (widgetsLookup[name] = []);
        widgets.push(widget);
    };

    var widget = helpers.mount(require.resolve("./index"), {});

    expect(widgetsLookup["app-nested-widget-bind/foo"].length).to.equal(1);
    expect(widgetsLookup["app-nested-widget-bind/bar"].length).to.equal(1);

    expect(widgetsLookup["app-nested-widget-bind/foo"][0]).to.equal(widget);

    delete window.addWidget;
};

module.exports.fails = true;
