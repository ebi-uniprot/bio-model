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
var position_1 = require("../dna/position");
var Variant = /** @class */ (function (_super) {
    __extends(Variant, _super);
    function Variant(chrom, start, end, base, allele, reverseStrand, genes) {
        if (reverseStrand === void 0) { reverseStrand = false; }
        if (genes === void 0) { genes = []; }
        var _this = _super.call(this, start, end, reverseStrand) || this;
        _this.chromosome = chrom;
        _this.base = base;
        _this.allele = allele;
        _this.genes = genes;
        return _this;
    }
    Object.defineProperty(Variant.prototype, "chromosome", {
        get: function () {
            return this._chromosome;
        },
        set: function (ch) {
            this._chromosome = ch;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Variant.prototype, "base", {
        get: function () {
            return this._base;
        },
        set: function (b) {
            this._base = b;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Variant.prototype, "allele", {
        get: function () {
            return this._allele;
        },
        set: function (a) {
            this._allele = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Variant.prototype, "genes", {
        get: function () {
            return this._genes;
        },
        set: function (g) {
            this._genes = g;
        },
        enumerable: true,
        configurable: true
    });
    return Variant;
}(position_1.default));
exports.default = Variant;
