var expect = require("chai").expect;

function Widget(config) {
    this.label = config.label;
    this.name = "app-fixed-id";
    window.appFixedId = this;
}

Widget.prototype = {
    testGetWidget: () => {
        var helloWidget = this.getWidget("hello");
        expect(helloWidget != null).to.equal(true);
    },
    testGetEl: () => {
        var wrapperEl = this.getEl("wrapper");
        expect(wrapperEl != null).to.equal(true);
    }
};

exports.Widget = Widget;
