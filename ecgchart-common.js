function __export(m) {
    for (var p in m)
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
var view_1 = require("ui/core/view");
var color_1 = require("color");
__export(require("ui/core/view"));
var EcgChartBase = (function (_super) {
    __extends(EcgChartBase, _super);

    function EcgChartBase() {
        console.log('common 3');
        return _super !== null && _super.apply(this, arguments) || this;
    }

    return EcgChartBase;
}(view_1.View));
exports.ECGChartBase = EcgChartBase;
exports.penColorProperty = new view_1.Property({
    name: "penColor"
});
exports.penColorProperty.register(EcgChartBase);
exports.penWidthProperty = new view_1.Property({
    name: "penWidth"
});
exports.penWidthProperty.register(EcgChartBase);