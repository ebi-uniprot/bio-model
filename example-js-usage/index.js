
const BioModel = require('../dist/index').default;

const { Protein } = BioModel;


const ABPP = new Protein('P05067');
console.log(ABPP.accession);
