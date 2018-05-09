
// const BioModel = require('../dist/index').default;

// const { Protein } = BioModel;


// const ABPP = new Protein('P05067');
// console.log(ABPP.accession);


const biolib = require('../dist/index').default;

const {
  DNA: { Position },
  Variants: { Variant, ProteinVariants },
  Chromosome: { Chromosome },
  Gene: { Gene }
} = biolib;

const chrom = new Chromosome('7');
const start = 1;
const end = 20;
const base = 'G';
const allele = 'C';
const reverseStrand = true;
const genes = [
  new Gene('C150', 1, 13, true),
  new Gene('C172', 5, 28, true)
];

const test = new Variant(chrom, start, end, base, allele, reverseStrand);

console.log("Chromosome:", test.chromosome.name);
console.log("Position:", test.start, test.end);
console.log("Base/Allele:", test.base, test.allele);
console.log("Strand:", test.strand);
console.log("is forward:", test.isForwardStrand);
