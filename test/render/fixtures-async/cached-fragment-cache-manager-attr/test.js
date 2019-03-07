var caches = {};

function createCache() {
    var cache = {};

    return {
        get: (cacheKey, options, callback) => {
            setTimeout(() => {
                var value = cache[cacheKey];
                if (value !== undefined) {
                    return callback(null, value);
                }

                var builder = options.builder;
                builder((err, value) => {
                    if (err) {
                        return callback(err);
                    }

                    if (value === undefined) {
                        value = null;
                    }

                    cache[cacheKey] = value;

                    callback(null, value);
                });
            }, 10);
        }
    };
}

var myCacheManager = {
    getCache: cacheName => {
        return caches[cacheName] || (caches[cacheName] = createCache());
    }
};

exports.templateData = {
    myCacheManager: myCacheManager
};
