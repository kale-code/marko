exports.templateData = {
    beginAsync: out => {
        var asyncOut = out.beginAsync();
        setTimeout(() => {
            asyncOut.write("B");
            asyncOut.end();
        }, 20);
    }
};
