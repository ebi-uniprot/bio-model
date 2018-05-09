
export default class Chromosome {

  private _name: string;
  // size

  public constructor(name: string) {
    this.name = name;
  }

  public get name() : string {
    return this._name;
  }

  public set name(n: string) {
    // 1-22
    // x,y
    // m,...
    this._name = n;
  }
}
