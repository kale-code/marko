var defaultCacheManagerPath = require.resolve("./default-cache-manager");

module.exports = (el, context) => {
    if (!el.hasAttribute("cache-manager")) {
        var requirePath = context.getRequirePath(defaultCacheManagerPath);
        var defaultCacheManagerVar = context.importModule(
            "__defaultCacheManager",
            requirePath
        );
        el.setAttributeValue("cache-manager", defaultCacheManagerVar);
    }
};
