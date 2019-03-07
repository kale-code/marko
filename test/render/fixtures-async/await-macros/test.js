function delayedDataProvider(delay, value) {
    return (args, done) => {
        setTimeout(() => {
            done(null, value);
        }, delay);
    };
}

exports.tests = [
    {
        templateData: {
            D1: delayedDataProvider(100)
        },
        expectedFile: require.resolve("./expected.html")
    }
];
