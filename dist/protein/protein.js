"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
/**
 * Representing a Protein, based on the EBI's
 * API model.
 *
 * @classdesc Class representing a protein.
 */
var Protein = /** @class */ (function () {
    // --------------------------------------------------------
    // Methods
    // --------------------------------------------------------
    /**
     * Public constructor method.
     *
     * @param {string} accession - The protein's accession ID.
     */
    function Protein(accession) {
        this.accession_setter(accession);
    }
    Object.defineProperty(Protein.prototype, "accession", {
        // --------------------------------------------------------
        // Getter & Setters
        // --------------------------------------------------------
        /**
         * Public 'getter' method for 'accession' property.
         *
         * @return {string} Accession ID.
         */
        get: function () {
            return this._accession;
        },
        /**
         * Trap-setter method for 'accession' property.
         *
         * @param {string} ignored - This value will be ignored.
         */
        set: function (ignored) {
            throw ("The 'accession' property does not have a public 'setter' method.");
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Private 'setter' method for 'accession' property.
     *
     * @param {string} accession - The accession ID of the protein.
     */
    Protein.prototype.accession_setter = function (accession) {
        chai_1.expect(accession)
            .to.not.be.undefined;
        chai_1.expect(accession)
            .to.not.be.null;
        chai_1.expect(accession)
            .to.be.a('string');
        this._accession = accession;
    };
    return Protein;
}());
exports.default = Protein;
