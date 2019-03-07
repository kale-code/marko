var path = require("path");

describe(path.basename(__dirname), () => {
    it("should initialize components correctly across async boundaries", () => {
        window.appInitAsync.test();
    });
});
