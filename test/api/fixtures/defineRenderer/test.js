exports.check = (marko, markoCompiler, expect, snapshot, done) => {
    var defineRenderer = require("marko/defineRenderer");
    var renderer = defineRenderer({
        template: require("./template.marko"),
        getTemplateData: input => {
            return {
                fullName: input.firstName + " " + input.lastName
            };
        }
    });

    var renderResult = renderer.render({ firstName: "John", lastName: "Doe" });
    snapshot(renderResult.getOutput());
    done();
};
