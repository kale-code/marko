var path = require("path");

describe(path.basename(__dirname), () => {
    it("should invoke lifecycle events correctly when a UI component is rendered on the server", () => {
        var component = window.components["lifecycle-events"];
        component.test();
    });

    it("should invoke lifecycle events correctly when a UI component is rendered on the server - component exports class", () => {
        var component = window.components["lifecycle-events-component-class"];
        component.test();
    });

    it("should invoke lifecycle events correctly when a UI component is rendered on the server - component exports class ctor", () => {
        var component =
            window.components["lifecycle-events-component-class-ctor"];
        component.test();
    });

    it("should invoke lifecycle events correctly when a UI component is rendered on the server - component exports object", () => {
        var component = window.components["lifecycle-events-component-object"];
        component.test();
    });
});
