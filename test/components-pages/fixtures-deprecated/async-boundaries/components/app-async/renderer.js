var template = require("./template.marko");

module.exports = (input, out) => {
    var asyncOut = out.beginAsync();
    setTimeout(() => {
        template.render(
            {
                name: input.name,
                widgetConfig: {
                    name: input.name
                }
            },
            asyncOut
        );
        asyncOut.end();
    }, 10);
};
