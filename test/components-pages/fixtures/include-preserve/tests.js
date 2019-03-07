var path = require("path");

describe(path.basename(__dirname), () => {
    it("preserve content included on the server", () => {
        window.app.test();
    });
});
