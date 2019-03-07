const commonMigrators = [
    require("./non-standard-template-literals"),
    require("./render-calls"),
    require("./widget-get-template-data")
];

module.exports = (root, context) => {
    commonMigrators.forEach(migrator => migrator(root, context));
    return true;
};
