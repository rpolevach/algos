import { makeNumberArray } from "../../Task3/logic/extractArray";

export const mergeSort = array => {
  let numbers = makeNumberArray(array);

  if (numbers.length <= 1) return numbers;

  const middle = Math.floor(numbers.length / 2);
  const left = numbers.slice(0, middle);
  const right = numbers.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
};

const merge = (left, right) => {
  let result = [];
  let indexLeft = 0;
  let indexRight = 0;

  while (indexLeft < left.length && indexRight < right.length) {
    if (left[indexLeft] < right[indexRight]) {
      result.push(left[indexLeft]);
      indexLeft++;
    } else {
      result.push(right[indexRight]);
      indexRight++;
    }
  }

  return result.concat(left.slice(indexLeft)).concat(right.slice(indexRight));
};
