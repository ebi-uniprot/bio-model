
import Position from '../dna/position';

export default class Gene extends Position {

  private _name: string;
  private _symbol: string;
  // ENSG[]

  public constructor(
      name: string,
      symbol: string,
      start: number,
      end: number,
      reverseStrand: boolean = false
    ) {
    super(start, end, reverseStrand);
    this.name = name;
    this.symbol = symbol;
  }

  public get name() : string {
    return this._name;
  }

  public set name(n: string) {
    this._name = n;
  }

  public get symbol() : string {
    return this._symbol;
  }

  public set symbol(s: string) {
    this._symbol = s;
  }
}
