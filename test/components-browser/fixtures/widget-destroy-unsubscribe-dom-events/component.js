var expect = require("chai").expect;

module.exports = {
    onMount: () => {
        this.logOutput = [];

        this.name = "app-dom-events";

        var slef = this;
        function log(data) {
            slef.logOutput.push(data);
        }

        this.log = log;
        this.clearLog = () => {
            this.logOutput = [];
        };

        this.logOutput = [];
    },

    handleFooLinkDblClick: () => {
        this.log("#fooLink:dblclick");
    },

    handleFooLinkMouseOut: (event, el) => {
        expect(event.target).to.equal(el);
        this.log("#fooLink:mouseout");
    }
};
