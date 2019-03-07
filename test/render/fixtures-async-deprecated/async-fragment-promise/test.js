exports.templateData = {
    promiseData: () => {
        return new Promise(function(resolve) {
            setTimeout(() => {
                resolve("Test promise");
            }, 100);
        });
    }
};
