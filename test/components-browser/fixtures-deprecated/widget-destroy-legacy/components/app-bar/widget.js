function Widget(config) {
    this.label = config.label;
    this.name = "app-bar";

    var $el = this.$();

    this.appendHtml = html => {
        $el.append(html);
    };
}

Widget.prototype = {};

exports.Widget = Widget;
