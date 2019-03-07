module.exports = function(input, out) {
    var asyncOut = out.beginAsync();
    setTimeout(() => {
        asyncOut.write("[async] " + input.name);
        asyncOut.end();
    }, 10);
};
