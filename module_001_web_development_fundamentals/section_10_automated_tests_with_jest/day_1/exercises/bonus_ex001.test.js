const { searchEmployee } = require('./bonus_ex001');

describe('Teste searchEmployee()', () => {
  test('searchEmployee está implementada?', () => {
    expect(searchEmployee).toBeDefined();
  });
  test('Retorna "ID não identificada" se não houver nenhum objeto com o ID', () => {
    expect(searchEmployee('2', 'firstName')).toBe('ID não identificada');
  });
  test('Retorna "Informação indisponível" se não houver nenhum objeto com a info', () => {
    expect(searchEmployee('5569-4', 'firstName', 'middleName')).toBe('Informação indisponível');
  });
  test('Retorna as infos se ID e informações existirem', () => {
    expect(searchEmployee('9852-2-2', 'firstName', 'lastName', 'specialities')).toEqual('Jeff Cook Ruby,SQL');
  });
});
