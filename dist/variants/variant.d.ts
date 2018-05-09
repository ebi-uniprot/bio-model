import Chromosome from '../chromosome/chromosome';
import Position from '../dna/position';
import Gene from '../gene/gene';
export default class Variant extends Position {
    private _chromosome;
    private _base;
    private _allele;
    private _genes;
    constructor(chrom: Chromosome, start: number, end: number, base: string, allele: string, reverseStrand?: boolean, genes?: Gene[]);
    chromosome: Chromosome;
    base: string;
    allele: string;
    genes: Gene[];
}
