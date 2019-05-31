export const sortByInsert = array => {
  let numbers = makeNumberArray(array);

  let sorted = [numbers[0]];

  numbers.shift();

  for (let i = 0; i < numbers.length; i++) {
    const el = numbers[i];

    let pos;

    for (let j = 0; j < sorted.length; j++) {
      if (el > sorted[j]) {
        pos = j + 1;
      }

      if (el < sorted[j]) {
        pos = j;
        break;
      }
    }
    sorted.splice(pos, 0, el);
  }

  return sorted;
};

const makeNumberArray = array => {
  let numberArray = [];

  for (let i = 0; i < array.length; i++) {
    numberArray.push(Number.parseInt(array[i]));
  }

  return numberArray;
};
