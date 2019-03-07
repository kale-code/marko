var expect = require("chai").expect;

module.exports = (helpers, done) => {
    var widget = helpers.mount(require.resolve("./index"), {});
    var $el = widget.$();
    var $button = widget.$("#button");

    $el.click(() => {
        helpers.log("$el:click");
    });

    $button.click(event => {
        event.stopPropagation();
        helpers.log("$button:click");
    });

    // Trigger a click event on the root element
    helpers.triggerClick(widget.el);
    helpers.triggerClick(widget.getEl("button"));

    expect(helpers.logOutput).to.deep.equal(["$el:click", "$button:click"]);

    done();
};
