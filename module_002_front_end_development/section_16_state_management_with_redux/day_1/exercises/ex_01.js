window.onload = function() {
  const criarCor = () => {
    const oneChar = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
    let cor = '#';
    const aleatorio = () => Math.floor(Math.random() * oneChar.length);
    for (let i = 0; i < 6; i += 1) {
        cor += oneChar[aleatorio()];
    }
    return cor;
  }

  const ESTADO_INICIAL = {
    colors: ['white', 'black', 'red', 'green', 'blue', 'yellow'],
    index: 0,
  };

  const reducer = (state = ESTADO_INICIAL, action) => {
    switch (action.type) {
      case 'NEXT_COLOR':
        return {
          ...state,
          index: action.index,
        }
      case 'PREVIOUS_COLOR':
        return {
          ...state,
          index: action.index,
        }
      case 'ADD_COLOR':
        return {
          ...state,
          colors: [...state.colors, action.newColor],
          index: action.index,
        }
      default:
        return state;
    }
  }

  const store = Redux.createStore(reducer);

  const nextColor = () => {
    const { index, colors }= store.getState();
    if (index === colors.length - 1) {
      return ({
        type: 'NEXT_COLOR',
        index: 0,
      })
    } else {
      return ({
        type: 'NEXT_COLOR',
        index: index + 1,
      })
    }
  }

  const previousColor = () => {
    const { index, colors } = store.getState();
    if (index === 0) {
      return ({
        type: 'PREVIOUS_COLOR',
        index: colors.length - 1,
      })
    } else {
      return ({
        type: 'PREVIOUS_COLOR',
        index: index - 1,
      })
    }
  }

  const addRandomColor = () => {
    const { colors } = store.getState();
    const newColor = criarCor();
    return ({
      type: 'ADD_COLOR',
      newColor,
      index: colors.length,
    });
  }

  const nextBtn = document.querySelector('#next');
  const previousBtn = document.querySelector('#previous');
  const randomColor = document.querySelector('#random');

  nextBtn.addEventListener('click', () => {
    store.dispatch(nextColor());
  });

  previousBtn.addEventListener('click', () => {
    store.dispatch(previousColor());
  })

  randomColor.addEventListener('click', () => {
    store.dispatch(addRandomColor());
  })

  const changeColor = () => {
    const { colors, index }= store.getState();
    const colorValue = document.querySelector('#value');
    colorValue.innerHTML = colors[index];
  }

  store.subscribe(() => {
    changeColor();
  });
}