var expect = require("chai").expect;

var Component = {
    onCreate: () => {
        this.logOutput = [];

        this.name = "app-dom-events";

        var _this = this;
        function log(data) {
            _this.logOutput.push(data);
        }

        this.log = log;
        this.clearLog = () => {
            this.logOutput = [];
        };

        this.logOutput = [];
    },

    handleRootClick: (event, el) => {
        expect(el.getAttribute("class")).to.equal("app-dom-events");
        expect(event.target.tagName.length > 0).to.equal(true);
        this.log("el:click");
        expect(this.name).to.equal("app-dom-events");
    },

    handleButtonClick: () => {
        this.log("button:click");
    },

    handleRootMouseMove: () => {
        this.log("el:mousemove");
    },

    handleButtonSpanMouseMove: () => {
        this.log("button>span:mousemove");
    },

    handleFooLinkDblClick: () => {
        this.log("#fooLink:dblclick");
    },

    handleFooLinkMouseOut: (event, el) => {
        expect(event.target).to.equal(el);
        this.log("#fooLink:mouseout");
    },

    handleHelloWorldMouseDown: (event, el) => {
        expect(this.getEl("helloWorld")).to.equal(el);
        this.log("#helloWorld:mousedown");
    }
};

module.exports = Component;
