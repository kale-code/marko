exports.templateData = {
    sharedData: () => new Promise(resolve => {
            setTimeout(() => {
                resolve({ name: "testSharedData" });
            }, 100);
        }),
    contextData: (args, done) => {
        setTimeout(() => {
            done(null, {
                name: "testContextData"
            });
        }, 100);
    }
};
