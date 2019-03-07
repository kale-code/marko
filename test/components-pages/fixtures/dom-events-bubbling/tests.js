var path = require("path");

function triggerMouseEvent(el, type) {
    var ev = document.createEvent("MouseEvent");
    ev.initMouseEvent(
        type,
        true /* bubble */,
        true /* cancelable */,
        window,
        null,
        0,
        0,
        0,
        0 /* coordinates */,
        false,
        false,
        false,
        false /* modifier keys */,
        0 /*left*/,
        null
    );
    el.dispatchEvent(ev);
}

function triggerClick(el) {
    triggerMouseEvent(el, "click");
}

var helpers = {
    triggerMouseEvent: triggerMouseEvent,
    triggerClick: triggerClick
};

describe(path.basename(__dirname), () => {
    it("should allow no args", () => {
        window.components["no-args"].test(helpers);
    });

    it("should allow one arg", () => {
        window.components["one-arg"].test(helpers);
    });

    it("should allow one arg as array", () => {
        window.components["one-arg-array"].test(helpers);
    });

    it("should allow two args", () => {
        window.components["two-args"].test(helpers);
    });
});
