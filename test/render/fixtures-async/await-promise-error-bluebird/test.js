var deferred = require("bluebird").defer();

setTimeout(() => {
    deferred.resolve({});
}, 200);

exports.templateData = {
    promiseData: deferred.promise
};
