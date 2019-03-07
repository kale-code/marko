var componentsById = {};

exports.addComponent = (itemId, component) => {
    componentsById[itemId] = component;
};

exports.componentsById = componentsById;
