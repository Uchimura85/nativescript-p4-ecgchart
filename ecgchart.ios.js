function __export(m) {
    for (var p in m)
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
var color_1 = require("color");
var drawingpad_common_1 = require("./ecgchart-common");
__export(require("./ecgchart-common"));
var DrawingPad = (function (_super) {
    __extends(DrawingPad, _super);

    function DrawingPad() {
        var _this = _super.call(this) || this;
        _this.nativeView = SignatureView.alloc().initWithFrame(CGRectMake(0, 0, 100, 100));
        _this.nativeView.clipsToBounds = true;
        return _this;
    }
    Object.defineProperty(DrawingPad.prototype, "ios", {
        get: function () {
            return this.nativeView;
        },
        enumerable: true,
        configurable: true
    });
    DrawingPad.prototype[drawingpad_common_1.penWidthProperty.getDefault] = function () {
        return this.nativeView.foregroundLineWidth;
    };
    DrawingPad.prototype[drawingpad_common_1.penWidthProperty.setNative] = function (value) {
        this.nativeView.setLineWidth(Math.floor(value));
    };
    DrawingPad.prototype[drawingpad_common_1.penColorProperty.getDefault] = function () {
        return this.nativeView.foregroundLineColor;
    };
    DrawingPad.prototype[drawingpad_common_1.penColorProperty.setNative] = function (value) {
        var color = value instanceof color_1.Color ? value.ios : value;
        this.nativeView.setLineColor(color);
    };
    DrawingPad.prototype.onLoaded = function () {
        if (this.width) {
            this.nativeView.frame.size.width = this.width;
        }
        if (this.height) {
            this.nativeView.frame.size.height = this.height;
        }
    };
    DrawingPad.prototype.getDrawing = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                var isSigned = _this.nativeView.isSigned();
                if (isSigned === true) {
                    var data = _this.nativeView.signatureImage();
                    resolve(data);
                } else {
                    reject("DrawingPad is empty.");
                }
            } catch (err) {
                reject(err);
            }
        });
    };
    DrawingPad.prototype.getDrawingSvg = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                var isSigned = _this.nativeView.isSigned();
                if (isSigned === true) {
                    var data = _this.nativeView.signatureSvg();
                    resolve(data);
                } else {
                    reject("DrawingPad is empty.");
                }
            } catch (err) {
                reject(err);
            }
        });
    };
    DrawingPad.prototype.clearDrawing = function () {
        try {
            if (this.backgroundColor) {
                var color = this.backgroundColor;
                if (color.constructor == color_1.Color) {
                    color = color.ios;
                } else if (color.constructor == String) {
                    color = new color_1.Color(color).ios;
                }
                this.nativeView.clearWithColor(color);
            } else {
                this.nativeView.clear();
            }
        } catch (err) {
            console.log("Error clearing the DrawingPad: " + err);
        }
    };
    return DrawingPad;
}(drawingpad_common_1.DrawingPadBase));
exports.DrawingPad = DrawingPad;