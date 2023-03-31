import { getLocalStorage, setLocalStorage } from './localStorage';

const emptyLocalStorage = (product) => setLocalStorage('carrinho', [product]);

const filterLocalStorage = (product) => {
  const localStorage = getLocalStorage('carrinho');
  const filteredLS = localStorage.filter((e) => e.id !== product.id);
  filteredLS.push(product);
  setLocalStorage('carrinho', filteredLS);
};

export { emptyLocalStorage, filterLocalStorage };
