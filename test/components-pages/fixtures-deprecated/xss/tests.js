var path = require("path");
var expect = require("chai").expect;

describe(path.basename(__dirname), () => {
    it("should handle ending </script> tag", done => {
        var ready = require("marko/ready");

        ready(() => {
            expect(window.fooWidget.state.evil).to.equal(
                '</script><script>alert("hello")</script>'
            );
            expect(window.fooWidget.widgetConfig.evil).to.equal(
                '</script><script>alert("hello")</script>'
            );
            done();
        });
    });
});
