function __export(m) {
    for (var p in m)
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
var color_1 = require("color");
var ecgchart_common_1 = require("./ecgchart-common");
var EcgChartAndroid = com.hero.ecgchart.ECGChart;
__export(require("./ecgchart-common"));
var EcgChart = (function (_super) {
    __extends(EcgChart, _super);

    function EcgChart() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(EcgChart.prototype, "android", {
        get: function () {
            return this.nativeView;
        },
        enumerable: true,
        configurable: true
    });
    EcgChart.prototype.createNativeView = function () {
        console.log('createNativeView  10');
        var signaturePad = new EcgChartAndroid(this._context, null);
        if (this.penColor) {
            signaturePad.setPenColor(this.penColor.android);
        }
        if (this.penWidth) {
            signaturePad.setMinWidth(this.penWidth);
        }
        return signaturePad;
    };
    EcgChart.prototype[ecgchart_common_1.penWidthProperty.getDefault] = function () {
        return this.nativeView.minWidth;
    };
    EcgChart.prototype[ecgchart_common_1.penWidthProperty.setNative] = function (value) {
        this.nativeView.setMinWidth(value);
    };
    EcgChart.prototype[ecgchart_common_1.penColorProperty.getDefault] = function () {
        return this.nativeView.penColor;
    };
    EcgChart.prototype[ecgchart_common_1.penColorProperty.setNative] = function (value) {
        var color = value instanceof color_1.Color ? value.android : value;
        this.nativeView.setPenColor(color);
    };

    EcgChart.prototype.setGraphMode = function (_type) {
        try {
            // console.log('update function');
            if (this.android)
                this.android.setGraphMode(_type);
        } catch (err) {
            console.log('Error in setGraphMode: ' + err);
        }
    };


    EcgChart.prototype.addEcgData = function (_type) {
        try {
            // console.log('update function');
            if (this.android)
                this.android.addEcgData(_type);
        } catch (err) {
            console.log('Error in addEcgData: ' + err);
        }
    };

    return EcgChart;
}(ecgchart_common_1.ECGChartBase));
exports.EcgChart = EcgChart;