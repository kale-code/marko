exports.templateData = {
    userProvider: cb => {
        setTimeout(() => {
            cb(null, { name: "Frank" });
        }, 100);
    }
};
