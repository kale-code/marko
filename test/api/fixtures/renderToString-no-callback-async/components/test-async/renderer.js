module.exports = function(input, out) {
    var asyncOut = out.beginAsync();
    setTimeout(() => {
        asyncOut.write("[async]");
        asyncOut.end();
    }, 10);
};
