var path = require("path");

describe(path.basename(__dirname), () => {
    it("should allow diffing html", () => {
        var app = window.app;
        app.forceUpdate();
        app.update();
    });
});
