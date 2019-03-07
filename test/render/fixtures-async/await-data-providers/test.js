exports.templateData = {
    sharedData: () => {
        return new Promise(function(resolve) {
            setTimeout(() => {
                resolve({
                    name: "testSharedData"
                });
            }, 100);
        });
    },
    contextData: function(args, done) {
        setTimeout(() => {
            done(null, {
                name: "testContextData"
            });
        }, 100);
    }
};
