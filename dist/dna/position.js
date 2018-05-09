"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var strand_1 = require("./strand");
var Position = /** @class */ (function (_super) {
    __extends(Position, _super);
    function Position(start, end, reverseStrand) {
        if (reverseStrand === void 0) { reverseStrand = false; }
        var _this = _super.call(this, reverseStrand) || this;
        _this.start = start;
        _this.end = end;
        return _this;
    }
    Object.defineProperty(Position.prototype, "start", {
        get: function () {
            return this._start;
        },
        set: function (s) {
            this._start = s;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Position.prototype, "end", {
        get: function () {
            return this._end;
        },
        set: function (e) {
            this._end = e;
        },
        enumerable: true,
        configurable: true
    });
    return Position;
}(strand_1.default));
exports.default = Position;
