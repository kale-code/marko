module.exports = function removeDashes(str) {
    return str.replace(/-([a-z])/g, (match, lower) => {
        return lower.toUpperCase();
    });
};
