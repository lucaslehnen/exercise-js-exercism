//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const RNA = ['', 'C', 'G', 'A', 'U'];
const DNA = ['', 'G', 'C', 'T', 'A'];

export const toRna = (sequence = '') => {  
  return [...sequence].map((nucleotide, index) => RNA[DNA.indexOf(nucleotide)] ).join('')
};

