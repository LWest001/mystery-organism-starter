// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ["A", "T", "C", "G"];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

// An array to hold specimens
const specimenArray = [];

const complementMap = {
  A: "T",
  T: "A",
  G: "C",
  C: "G",
};

// A factory function to build p aqueor factories.
const pAequorFactory = (num, DNABaseArray) => {
  const pAequor = {
    // PROPS
    specimenNum: num,
    dna: DNABaseArray,

    // METHODS
    mutate() {
      const temp = returnRandBase();
      const randIdx = Math.floor(Math.random() * this.dna.length);
      if (temp != this.dna[randIdx]) {
        this.dna[Math.floor(Math.random() * this.dna.length)] =
          returnRandBase();
      } else {
        this.mutate();
      }
      return this.dna;
    },

    compareDNA(other) {
      let matches = 0;
      for (let base in this.dna) {
        if (this.dna[base] === other.dna[base]) {
          matches++;
        }
      }
      const percentMatch = ((matches / this.dna.length) * 100).toFixed(2);
      return percentMatch;
      console.log(
        `Specimen #${this.specimenNum} and specimen #${other.specimenNum} have ${percentMatch}% DNA in common`
      );
    },

    willLikelySurvive() {
      cgCount = 0;
      for (let base in this.dna) {
        if (this.dna[base] === "C" || this.dna[base] === "G") {
          cgCount++;
        }
      }
      cgPct = cgCount / this.dna.length;
      return cgPct >= 0.6;
    },

    complementStrand() {
      const newStrand = [];
      this.dna.forEach((base) => newStrand.push(complementMap[base]));
      return newStrand;
    },
  };
  specimenArray.push(pAequor);
  return pAequor;
};

const a = pAequorFactory(specimenArray.length, mockUpStrand());
const b = pAequorFactory(specimenArray.length, mockUpStrand());
const c = pAequorFactory(specimenArray.length, mockUpStrand());
const d = pAequorFactory(specimenArray.length, mockUpStrand());
const e = pAequorFactory(specimenArray.length, mockUpStrand());
const f = pAequorFactory(specimenArray.length, mockUpStrand());
const g = pAequorFactory(specimenArray.length, mockUpStrand());
const h = pAequorFactory(specimenArray.length, mockUpStrand());
const i = pAequorFactory(specimenArray.length, mockUpStrand());
const j = pAequorFactory(specimenArray.length, mockUpStrand());
const k = pAequorFactory(specimenArray.length, mockUpStrand());
const l = pAequorFactory(specimenArray.length, mockUpStrand());
const m = pAequorFactory(specimenArray.length, mockUpStrand());
const n = pAequorFactory(specimenArray.length, mockUpStrand());
const o = pAequorFactory(specimenArray.length, mockUpStrand());
const p = pAequorFactory(specimenArray.length, mockUpStrand());
const q = pAequorFactory(specimenArray.length, mockUpStrand());
const r = pAequorFactory(specimenArray.length, mockUpStrand());
const s = pAequorFactory(specimenArray.length, mockUpStrand());
const t = pAequorFactory(specimenArray.length, mockUpStrand());
const u = pAequorFactory(specimenArray.length, mockUpStrand());
const v = pAequorFactory(specimenArray.length, mockUpStrand());
const w = pAequorFactory(specimenArray.length, mockUpStrand());
const x = pAequorFactory(specimenArray.length, mockUpStrand());
const y = pAequorFactory(specimenArray.length, mockUpStrand());
const z = pAequorFactory(specimenArray.length, mockUpStrand());
const a1 = pAequorFactory(specimenArray.length, mockUpStrand());
const b1 = pAequorFactory(specimenArray.length, mockUpStrand());
const c1 = pAequorFactory(specimenArray.length, mockUpStrand());
const d1 = pAequorFactory(specimenArray.length, mockUpStrand());
const e1 = pAequorFactory(specimenArray.length, mockUpStrand());
const f1 = pAequorFactory(specimenArray.length, mockUpStrand());
const g1 = pAequorFactory(specimenArray.length, mockUpStrand());
const h1 = pAequorFactory(specimenArray.length, mockUpStrand());
const i1 = pAequorFactory(specimenArray.length, mockUpStrand());
const j1 = pAequorFactory(specimenArray.length, mockUpStrand());
const k1 = pAequorFactory(specimenArray.length, mockUpStrand());
const l1 = pAequorFactory(specimenArray.length, mockUpStrand());
const m1 = pAequorFactory(specimenArray.length, mockUpStrand());
const n1 = pAequorFactory(specimenArray.length, mockUpStrand());
const o1 = pAequorFactory(specimenArray.length, mockUpStrand());
const p1 = pAequorFactory(specimenArray.length, mockUpStrand());
const q1 = pAequorFactory(specimenArray.length, mockUpStrand());
const r1 = pAequorFactory(specimenArray.length, mockUpStrand());
const s1 = pAequorFactory(specimenArray.length, mockUpStrand());
const t1 = pAequorFactory(specimenArray.length, mockUpStrand());
const u1 = pAequorFactory(specimenArray.length, mockUpStrand());
const v1 = pAequorFactory(specimenArray.length, mockUpStrand());
const w1 = pAequorFactory(specimenArray.length, mockUpStrand());
const x1 = pAequorFactory(specimenArray.length, mockUpStrand());
const y1 = pAequorFactory(specimenArray.length, mockUpStrand());
const z1 = pAequorFactory(specimenArray.length, mockUpStrand());
const a2 = pAequorFactory(specimenArray.length, mockUpStrand());
const b2 = pAequorFactory(specimenArray.length, mockUpStrand());
const c2 = pAequorFactory(specimenArray.length, mockUpStrand());
const d2 = pAequorFactory(specimenArray.length, mockUpStrand());
const e2 = pAequorFactory(specimenArray.length, mockUpStrand());
const f2 = pAequorFactory(specimenArray.length, mockUpStrand());
const g2 = pAequorFactory(specimenArray.length, mockUpStrand());
const h2 = pAequorFactory(specimenArray.length, mockUpStrand());
const i2 = pAequorFactory(specimenArray.length, mockUpStrand());
const j2 = pAequorFactory(specimenArray.length, mockUpStrand());
const k2 = pAequorFactory(specimenArray.length, mockUpStrand());
const l2 = pAequorFactory(specimenArray.length, mockUpStrand());
const m2 = pAequorFactory(specimenArray.length, mockUpStrand());
const n2 = pAequorFactory(specimenArray.length, mockUpStrand());
const o2 = pAequorFactory(specimenArray.length, mockUpStrand());
const p2 = pAequorFactory(specimenArray.length, mockUpStrand());
const q2 = pAequorFactory(specimenArray.length, mockUpStrand());
const r2 = pAequorFactory(specimenArray.length, mockUpStrand());
const s2 = pAequorFactory(specimenArray.length, mockUpStrand());
const t2 = pAequorFactory(specimenArray.length, mockUpStrand());
const u2 = pAequorFactory(specimenArray.length, mockUpStrand());
const v2 = pAequorFactory(specimenArray.length, mockUpStrand());
const w2 = pAequorFactory(specimenArray.length, mockUpStrand());
const x2 = pAequorFactory(specimenArray.length, mockUpStrand());
const y2 = pAequorFactory(specimenArray.length, mockUpStrand());
const z2 = pAequorFactory(specimenArray.length, mockUpStrand());
const a3 = pAequorFactory(specimenArray.length, mockUpStrand());
const b3 = pAequorFactory(specimenArray.length, mockUpStrand());
const c3 = pAequorFactory(specimenArray.length, mockUpStrand());
const d3 = pAequorFactory(specimenArray.length, mockUpStrand());
const e3 = pAequorFactory(specimenArray.length, mockUpStrand());
const f3 = pAequorFactory(specimenArray.length, mockUpStrand());
const g3 = pAequorFactory(specimenArray.length, mockUpStrand());
const h3 = pAequorFactory(specimenArray.length, mockUpStrand());
const i3 = pAequorFactory(specimenArray.length, mockUpStrand());
const j3 = pAequorFactory(specimenArray.length, mockUpStrand());
const k3 = pAequorFactory(specimenArray.length, mockUpStrand());
const l3 = pAequorFactory(specimenArray.length, mockUpStrand());
const m3 = pAequorFactory(specimenArray.length, mockUpStrand());
const n3 = pAequorFactory(specimenArray.length, mockUpStrand());
const o3 = pAequorFactory(specimenArray.length, mockUpStrand());
const p3 = pAequorFactory(specimenArray.length, mockUpStrand());
const q3 = pAequorFactory(specimenArray.length, mockUpStrand());
const r3 = pAequorFactory(specimenArray.length, mockUpStrand());
const s3 = pAequorFactory(specimenArray.length, mockUpStrand());
const t3 = pAequorFactory(specimenArray.length, mockUpStrand());
const u3 = pAequorFactory(specimenArray.length, mockUpStrand());
const v3 = pAequorFactory(specimenArray.length, mockUpStrand());
const w3 = pAequorFactory(specimenArray.length, mockUpStrand());
const x3 = pAequorFactory(specimenArray.length, mockUpStrand());
const y3 = pAequorFactory(specimenArray.length, mockUpStrand());
const z3 = pAequorFactory(specimenArray.length, mockUpStrand());

const survivingSpecimens = specimenArray.filter((specimen) =>
  specimen.willLikelySurvive()
);
console.log(z3.dna);
console.log(z3.complementStrand());

findMostRelated = (arr) => {
  let twoMostRelated = [];
  let maxRelation = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      const matchPct = arr[i].compareDNA(arr[j]);
      if (matchPct > maxRelation) {
        if (i != j) {
          maxRelation = matchPct;
          twoMostRelated = [arr[i].specimenNum, arr[j].specimenNum]
        }
      }
    }
  }
  return `The most related specimens are ${twoMostRelated[0]} and ${twoMostRelated[1]}. They have ${maxRelation}% DNA in common.`
};

findMostRelated(specimenArray)