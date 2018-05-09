
import Strand from './strand';

export default class Position extends Strand {

  private _start: number;
  private _end: number;

  public constructor(start: number, end: number, reverseStrand: boolean = false) {
    super(reverseStrand);
    this.start = start;
    this.end = end;
  }

  public get start() : number {
    return this._start;
  }

  public set start(s: number) {
    this._start = s;
  }

  public get end() : number {
    return this._end;
  }

  public set end(e: number) {
    this._end = e;
  }
}
