exports.templateData = {
    testDataProvider: done => {
        setTimeout(() => {
            var err = new Error("Something went wrong!");
            done(err, null);
        }, 200);
    }
};
