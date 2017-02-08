
export const get = (key) => {
  return window.localStorage.getItem(key);
};

export const set = (key, value) => {
  window.localStorage.setItem(key, value);
};

export const remove = (key) => {
  window.localStorage.removeItem(key);
};
