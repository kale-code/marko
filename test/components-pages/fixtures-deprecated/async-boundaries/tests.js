var path = require("path");

describe(path.basename(__dirname), () => {
    it("should initialize widgets correctly across async boundaries", () => {
        window.appInitAsync.test();
    });
});
