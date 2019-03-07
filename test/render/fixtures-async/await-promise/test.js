exports.templateData = {
    promiseData: () => {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve("Test promise");
            }, 100);
        });
    }
};
