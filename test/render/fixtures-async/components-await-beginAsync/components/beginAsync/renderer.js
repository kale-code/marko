module.exports = (input, out) => {
    var asyncOut = out.beginAsync();
    setTimeout(() => {
        input.renderBody(asyncOut);
        asyncOut.end();
    }, 10);
};
