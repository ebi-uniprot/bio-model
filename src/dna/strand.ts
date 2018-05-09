
export default class Strand {

  private _reverseStrand: boolean = false;

  public constructor(reverseStrand: boolean = false) {
    this._reverseStrand = reverseStrand;
  }

  public get strand() : string {
    return (this._reverseStrand)
      ? 'reverse'
      : 'forward';
  }

  public set strand(s: string) {
    this._reverseStrand = ('reverse' === s);
  }

  public get isForwardStrand() : boolean {
    return (false === this._reverseStrand);
  }

  public set isForwardStrand(ignore: boolean) {
    throw "The 'isForwardStrand' is a read-only property.";
  }

  public get isReverseStrand() : boolean {
    return this._reverseStrand;
  }

  public set isReverseStrand(ignore: boolean) {
    throw "The 'isReverseStrand' is a read-only property.";
  }
}
