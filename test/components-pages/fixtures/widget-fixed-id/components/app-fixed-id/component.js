var expect = require("chai").expect;

module.exports = {
    onInput: function(input) {
        this.label = input.label || "app-fixed-id";
    },

    onMount: () => {
        this.name = "app-fixed-id";
        window.appFixedId = this;
    },
    testGetComponent: () => {
        var helloComponent = this.getComponent("hello");
        expect(helloComponent != null).to.equal(true);
    },
    testGetEl: () => {
        var wrapperEl = this.getEl("wrapper");
        expect(wrapperEl != null).to.equal(true);
    }
};
