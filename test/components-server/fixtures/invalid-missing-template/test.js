var expect = require("chai").expect;

module.exports = () => {
    var defineComponent = require("marko/components/legacy").defineComponent;
    expect(() => {
        defineComponent({
            // template: require.resolve('./template.marko'),

            getTemplateData: function(state, input) {
                return {
                    name: input.name,
                    messageCount: input.messageCount
                };
            }
        });
    }).to.throw(/Expected "template"/);
};
