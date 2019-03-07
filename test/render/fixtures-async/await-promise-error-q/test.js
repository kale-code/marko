var promise = new Promise(function(resolve) {
    setTimeout(() => {
        resolve({});
    }, 100);
});

exports.templateData = {
    promiseData: promise
};
