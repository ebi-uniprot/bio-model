"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Strand = /** @class */ (function () {
    function Strand(reverseStrand) {
        if (reverseStrand === void 0) { reverseStrand = false; }
        this._reverseStrand = false;
        this._reverseStrand = reverseStrand;
    }
    Object.defineProperty(Strand.prototype, "strand", {
        get: function () {
            return (this._reverseStrand)
                ? 'reverse'
                : 'forward';
        },
        set: function (s) {
            this._reverseStrand = ('reverse' === s);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Strand.prototype, "isForwardStrand", {
        get: function () {
            return (false === this._reverseStrand);
        },
        set: function (ignore) {
            throw "The 'isForwardStrand' is a read-only property.";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Strand.prototype, "isReverseStrand", {
        get: function () {
            return this._reverseStrand;
        },
        set: function (ignore) {
            throw "The 'isReverseStrand' is a read-only property.";
        },
        enumerable: true,
        configurable: true
    });
    return Strand;
}());
exports.default = Strand;
