/**
 * Representing a Protein, based on the EBI's
 * API model.
 *
 * @classdesc Class representing a protein.
 */
export default class Protein {
    /**
     * Accession ID of the protein.
     *
     * @type {string}
     */
    private _accession;
    /**
     * Public constructor method.
     *
     * @param {string} accession - The protein's accession ID.
     */
    constructor(accession: string);
    /**
     * Public 'getter' method for 'accession' property.
     *
     * @return {string} Accession ID.
     */
    /**
     * Trap-setter method for 'accession' property.
     *
     * @param {string} ignored - This value will be ignored.
     */
    accession: string;
    /**
     * Private 'setter' method for 'accession' property.
     *
     * @param {string} accession - The accession ID of the protein.
     */
    private accession_setter(accession);
}
