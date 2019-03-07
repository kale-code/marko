module.exports = (el, context) => {
    el.detach();
    context.addDependency(eval(el.argument));
};
