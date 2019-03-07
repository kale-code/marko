var template = require("marko").load(require.resolve("./template.marko"));

exports.render = (input, out) => {
    var channel = input.channel;
    var name = input.name;

    template.render(
        {
            widgetConfig: {
                name: name,
                channel: channel
            }
        },
        out
    );
};
