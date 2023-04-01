const setLocalStorage = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};

const getLocalStorage = (key) => JSON.parse(localStorage.getItem(key));

const removeLocalStorage = (key) => {
  localStorage.removeItem(key);
};

export {
  getLocalStorage,
  setLocalStorage,
  removeLocalStorage,
};
