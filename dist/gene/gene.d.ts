import Position from '../dna/position';
export default class Gene extends Position {
    private _name;
    private _symbol;
    constructor(name: string, symbol: string, start: number, end: number, reverseStrand?: boolean);
    name: string;
    symbol: string;
}
