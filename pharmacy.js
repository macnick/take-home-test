export class Drug {
  constructor(name, expiresIn, benefit) {
    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = benefit;
  }
}

export class Pharmacy {
  constructor(drugs = []) {
    this.drugs = drugs;
    this.characteristics = {
      Doliprane: { normal: -1, after: -2 },
      'Herbal Tea': { normal: 1, after: 2 },
      'Magic Pill': { normal: 0, after: 0 },
      Fervex: { normal: 1, after: 0, ten: 2, five: 3 },
      Dafalgan: { normal: -2, after: -4 },
    };
  }

  updateValue(drug, { normal, after, ten, five }) {
    if (drug.name === 'Fervex') {
      if (drug.expiresIn <= 0) {
        drug.benefit = after;
      } else if (drug.expiresIn <= 5) {
        drug.benefit += five;
      } else if (drug.expiresIn <= 10) {
        drug.benefit += ten;
      } else {
        drug.benefit += normal;
      }
    } else {
      if (drug.expiresIn > 0) {
        drug.benefit += normal;
      } else {
        drug.benefit += after;
      }
    }
    if (drug.name != 'Magic Pill') drug.expiresIn -= 1;
    if (drug.benefit < 0) drug.benefit = 0;
    if (drug.benefit > 50) drug.benefit = 50;
  }

  updateBenefitValue() {
    for (let i = 0; i < this.drugs.length; i++) {
      if (!this.characteristics[this.drugs[i].name]) {
        this.characteristics[this.drugs[i].name] = { normal: -1, after: -2 };
      }
      this.updateValue(this.drugs[i], this.characteristics[this.drugs[i].name]);
    }
    return this.drugs;
  }
}
