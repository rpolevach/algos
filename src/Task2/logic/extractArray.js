export const extractArray = text => {
  let letters = text.match(/\d{1,}/g);

  return letters;
};

export const makeNumberArray = array => {
  let numberArray = [];

  for (let i = 0; i < array.length; i++) {
    numberArray.push(Number.parseInt(array[i]));
  }

  return numberArray;
};
