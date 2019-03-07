exports.templateData = {
    userProvider: function(cb) {
        setTimeout(() => {
            cb(null, { name: "Frank" });
        }, 100);
    }
};
