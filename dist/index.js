"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// export import Protein = require('./protein/protein');
var Chromosome = require("./chromosome");
var DNA = require("./dna");
var Gene = require("./gene");
var Protein = require("./protein");
var Variants = require("./variants");
var VCF = require("./vcf");
exports.default = {
    Chromosome: Chromosome,
    DNA: DNA,
    Gene: Gene,
    Protein: Protein,
    Variants: Variants,
    VCF: VCF
};
