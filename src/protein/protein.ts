
import { expect } from 'chai';

/**
 * Representing a Protein, based on the EBI's
 * API model.
 *
 * @classdesc Class representing a protein.
 */
export default class Protein {

  // --------------------------------------------------------
  // Properties
  // --------------------------------------------------------

  /**
   * Accession ID of the protein.
   * 
   * @type {string}
   */
  private _accession: string;



  // --------------------------------------------------------
  // Methods
  // --------------------------------------------------------

  /**
   * Public constructor method.
   * 
   * @param {string} accession - The protein's accession ID.
   */
  public constructor(accession: string) {
    this.accession_setter(accession);
  }



  // --------------------------------------------------------
  // Getter & Setters
  // --------------------------------------------------------

  /**
   * Public 'getter' method for 'accession' property.
   * 
   * @return {string} Accession ID.
   */
  public get accession() : string {
    return this._accession;
  }

  /**
   * Trap-setter method for 'accession' property.
   * 
   * @param {string} ignored - This value will be ignored.
   */
  public set accession(ignored: string) {
    throw(`The 'accession' property does not have a public 'setter' method.`);
  }

  /**
   * Private 'setter' method for 'accession' property.
   * 
   * @param {string} accession - The accession ID of the protein.
   */
  private accession_setter(accession: string) {

    expect(accession)
      .to.not.be.undefined;

    expect(accession)
      .to.not.be.null;

    expect(accession)
      .to.be.a('string');

    this._accession = accession;
  }
}
