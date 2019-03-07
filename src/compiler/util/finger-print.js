var sha1 = require("simple-sha1");

module.exports = str => {
    return sha1.sync(str);
};
