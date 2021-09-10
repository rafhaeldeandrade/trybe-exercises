const DATA_1 = 'DATA_1';
const DATA_2 = 'DATA_2';

const changeData1 = (nome = 'Rodrigo', sobrenome = 'Santos da Silva') => ({
  type: DATA_1,
  payload: {
    nome,
    sobrenome,
  }
});

const changeData2 = (nome = 'Bruna', sobrenome = 'Santana Oliveira') => ({
  type: DATA_2,
  payload: {
    nome,
    sobrenome,
  }
});

const ESTADO_INICIAL_1 = {
  nome: 'Rodrigo',
  sobrenome: 'Santos da Silva',
  endereco: 'Rua Soldado Mathias, 765',
  cidade: 'Belo Horizonte',
};

const ESTADO_INICIAL_2 = {
  nome: 'Bruna',
  sobrenome: 'Santana Oliveira',
  endereco: 'Rua Holanda, 332',
  cidade: 'São Paulo',
};

const meuPrimeiroReducer = (state = ESTADO_INICIAL_1, action) => {
  switch (action.type) {
    case DATA_1:
      return {
        ...state,
        nome: action.payload.nome,
        sobrenome: action.payload.sobrenome,
      }
    default:
      return state;
  }
};

const meuSegundoReducer = (state = ESTADO_INICIAL_2, action) => {
  switch (action.type) {
    case DATA_2:
      return {
        ...state,
        nome: action.payload.nome,
        sobrenome: action.payload.sobrenome,
      }
    default:
      return state;
  }
};

store.subscribe(() => {
  const currentState = store.getState();
  document.querySelector('#nome-1').innerHTML = currentState.meuPrimeiroReducer.nome;
  document.querySelector('#sobrenome-1').innerHTML = currentState.meuPrimeiroReducer.sobrenome;
  document.querySelector('#nome-2').innerHTML = currentState.meuSegundoReducer.nome;
  document.querySelector('#sobrenome-2').innerHTML = currentState.meuSegundoReducer.sobrenome;
})


const reducerCombinado = Redux.combineReducers({
  meuPrimeiroReducer,
  meuSegundoReducer});

const store = Redux.createStore(reducerCombinado);

window.onload = () => {
  setTimeout(() => {
    store.dispatch(changeData1('Rafhael', 'Gomes'));
    store.dispatch(changeData2('Nathália', 'Gomes'));
  }, 3000);
};
