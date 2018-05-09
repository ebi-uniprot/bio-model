
import Chromosome from '../chromosome/chromosome';
import Position from '../dna/position';
import Gene from '../gene/gene';

export default class Variant extends Position {

  private _chromosome: Chromosome;
  private _base: string;
  private _allele: string;
  private _genes: Gene[];

  public constructor(
      chrom: Chromosome,
      start: number,
      end: number,
      base: string,
      allele: string,
      reverseStrand: boolean = false,
      genes: Gene[] = []
    ) {
    super(start, end, reverseStrand);
    this.chromosome = chrom;
    this.base = base;
    this.allele = allele;
    this.genes = genes;
  }

  public get chromosome() : Chromosome {
    return this._chromosome;
  }

  public set chromosome(ch: Chromosome) {
    this._chromosome = ch;
  }

  public get base() : string {
    return this._base;
  }

  public set base(b: string) {
    this._base = b;
  }

  public get allele() : string {
    return this._allele;
  }

  public set allele(a: string) {
    this._allele = a;
  }

  public get genes() : Gene[] {
    return this._genes;
  }

  public set genes(g: Gene[]) {
    this._genes = g;
  }
}
