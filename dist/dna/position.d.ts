import Strand from './strand';
export default class Position extends Strand {
    private _start;
    private _end;
    constructor(start: number, end: number, reverseStrand?: boolean);
    start: number;
    end: number;
}
