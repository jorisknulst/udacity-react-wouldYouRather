export const setLocalStorage = (item, value) => {
  const stringifiedValue = JSON.stringify(value);

  localStorage.setItem(item, stringifiedValue);
};

export const getLocalStorage = item => {
  const rawData = localStorage.getItem(item);

  return JSON.parse(rawData);
};

export const removeLocalStorage = item => {
  localStorage.removeItem(item);
};
