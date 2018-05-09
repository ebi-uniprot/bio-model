"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Chromosome = /** @class */ (function () {
    // size
    function Chromosome(name) {
        this.name = name;
    }
    Object.defineProperty(Chromosome.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (n) {
            // 1-22
            // x,y
            // m,...
            this._name = n;
        },
        enumerable: true,
        configurable: true
    });
    return Chromosome;
}());
exports.default = Chromosome;
