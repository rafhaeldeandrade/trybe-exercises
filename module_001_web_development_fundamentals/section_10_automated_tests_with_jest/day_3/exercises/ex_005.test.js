const ex005 = require('./ex_004');

describe('Testa as funções upperCase, firstLetter and concatenateStrings', () => {
  it('mocks, changing the entire file (3 functions)', () => {
    const upperCase = jest
    .spyOn(ex005, 'upperCase')
    .mockImplementation((s) => s.toLowerCase());

    expect(upperCase('EUMSMPQ')).toBe('eumsmpq');
    expect(upperCase).toHaveBeenCalled();
    expect(upperCase).toHaveBeenCalledTimes(1);

    ex005.upperCase.mockRestore();

    expect(ex005.upperCase('eumsmpq')).toBe('EUMSMPQ');
  });
});
