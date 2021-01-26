import { Drug, Pharmacy } from './pharmacy';

describe('Pharmacy', () => {
  it('should decrease the benefit and expiresIn', () => {
    expect(
      new Pharmacy([new Drug('test', 2, 3)]).updateBenefitValue()
    ).toEqual([new Drug('test', 1, 2)]);
  });

  it('should decrease the benefit and expiresIn at double rate for Dafalgan', () => {
    expect(
      new Pharmacy([new Drug('Dafalgan', 10, 30)]).updateBenefitValue()
    ).toEqual([new Drug('Dafalgan', 9, 28)]);
  });

  it('should never decrease benefit or expiresIn for Magic Pill', () => {
    expect(
      new Pharmacy([new Drug('Magic Pill', 10, 40)]).updateBenefitValue()
    ).toEqual([new Drug('Magic Pill', 10, 40)]);
  });
});
