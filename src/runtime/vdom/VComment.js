var VNode = require("./VNode");
var inherit = require("raptor-util/inherit");

function VComment(value) {
    this.___VNode(-1 /* no children */);
    this.___nodeValue = value;
}

VComment.prototype = {
    ___nodeType: 8,

    ___actualize: doc => {
        var nodeValue = this.___nodeValue;
        return doc.createComment(nodeValue);
    },

    ___cloneNode: () => {
        return new VComment(this.___nodeValue);
    }
};

inherit(VComment, VNode);

module.exports = VComment;
