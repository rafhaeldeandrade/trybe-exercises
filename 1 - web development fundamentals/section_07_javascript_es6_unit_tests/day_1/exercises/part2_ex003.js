const btnClickCount = document.getElementById('btnClickCount');
const inputClickCount = document.getElementById('inputClickCount');
let count = inputClickCount.value > 0 ? inputClickCount.value : 0;

btnClickCount.addEventListener('click', () => {
  // let count = inputClickCount > 0 ? inputClickCount.value : 0;
  inputClickCount.value = count + 1;
  count += 1;
})