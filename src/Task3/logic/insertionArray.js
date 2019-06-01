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

export const bubbleSort = array => {
  let numbers = makeNumberArray(array);

  for (let j = numbers.length - 1; j > 0; j--) {
    for (let i = 0; i < j; i++) {
      if (numbers[i] > numbers[i + 1]) {
        let buff = numbers[i];
        numbers[i] = numbers[i + 1];
        numbers[i + 1] = buff;
      }
    }
  }

  return numbers;
};

export const makeNumberArray = array => {
  let numberArray = [];

  for (let i = 0; i < array.length; i++) {
    numberArray.push(Number.parseInt(array[i]));
  }

  return numberArray;
};
