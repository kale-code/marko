var expect = require("chai").expect;

module.exports = {
    onMount: () => {
        this.name = "app-legacy-button";

        var logOutput = (this.logOutput = []);

        function log(data) {
            logOutput.push(data);
        }

        this.log = log;
        this.clicked = false;
    },

    handleRootMouseDown: (event, el) => {
        this.clicked = true;
        expect(el.getAttribute("class")).to.equal("app-legacy-button");
        this.log("click");
        expect(this.name).to.equal("app-legacy-button");
    }
};
