"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Parser = /** @class */ (function () {
    function Parser() {
    }
    Parser.prototype.parse = function (input) {
        this.source = input;
        var tokenized = this.tokenizer();
    };
    Parser.prototype.tokenizer = function () {
        var lines = this.splitToLines(this.source);
        // const tokens = lines
        //   .map(line => line.match(/\S+/g) || []);
    };
    Parser.prototype.splitToLines = function (source) {
        return source
            .split(/\r?\n/);
    };
    return Parser;
}());
exports.default = Parser;
