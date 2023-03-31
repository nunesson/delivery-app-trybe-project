const setLocalStorage = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};

const getLocalStorage = (key) => {
  const data = localStorage.getItem(key);
  return JSON.parse(data);
};

const removeLocalStorage = (key) => {
  localStorage.removeItem(key);
};

export {
  getLocalStorage,
  setLocalStorage,
  removeLocalStorage,
};
