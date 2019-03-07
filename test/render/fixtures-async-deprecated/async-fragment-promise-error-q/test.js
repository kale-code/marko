var promise = new Promise(resolve => {
    setTimeout(() => {
        resolve({});
    }, 100);
});

exports.templateData = {
    promiseData: promise
};
