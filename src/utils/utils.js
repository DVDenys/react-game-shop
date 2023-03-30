// Общая стоимость
export const calcTotalPrice = (items) => {
  return items.reduce((acc, game) => (acc += game.price), 0);
};

// Получить с локального хранилища
export const getLocalStorage = (key) => {
  const data = localStorage.getItem(key);

  if (data !== null) {
    return JSON.parse(data);
  }

  return null;
};

// Отправить в локальное хранилище
export const setLocalStorage = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};

// Склонение слова, по определенному количеству товара
export const morph = (int, array) => {
  return (
    (array = array || ["товар", "товара", "товаров"]) &&
    array[
      int % 100 > 4 && int % 100 < 20
        ? 2
        : [2, 0, 1, 1, 1, 2][int % 10 < 5 ? int % 10 : 5]
    ]
  );
};