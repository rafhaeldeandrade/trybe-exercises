const ex004 = require('./ex_004');

jest.mock('./ex_004');

describe('Testa as funções upperCase, firstLetter and concatenateStrings', () => {
  it('mocks, changing the entire file (3 functions)', () => {
    ex004.upperCase.mockImplementation((s) => s.toLowerCase());

    expect(ex004.upperCase('EUMSMPQ')).toBe('eumsmpq');
    expect(ex004.upperCase).toHaveBeenCalled();
    expect(ex004.upperCase).toHaveBeenCalledTimes(1);

    ex004.firstLetter.mockImplementation((s) => s[s.length - 1]);

    expect(ex004.firstLetter('EUMSMPQ')).toBe('Q');
    expect(ex004.firstLetter).toHaveBeenCalled();
    expect(ex004.firstLetter).toHaveBeenCalledTimes(1);

    ex004.concatenateStrings.mockImplementation((s1, s2, s3) => `${s1 + s2 + s3}`);

    expect(ex004.concatenateStrings('EU', 'MSM', 'PQ')).toBe('EUMSMPQ');
    expect(ex004.concatenateStrings).toHaveBeenCalled();
    expect(ex004.concatenateStrings).toHaveBeenCalledTimes(1);
  });
});
