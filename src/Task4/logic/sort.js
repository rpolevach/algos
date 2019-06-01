import { makeNumberArray } from "../../Task3/logic/insertionArray";

export const quickSort = array => {
  if (array.length <= 1) return array;

  let numbers = makeNumberArray(array);

  let pivotIndex = Math.floor(numbers.length / 2);
  let pivot = numbers[pivotIndex];
  let less = [];
  let greater = [];

  for (let i = 0; i < numbers.length; i++) {
    if (i === pivotIndex) continue;

    if (numbers[i] <= pivot) {
      less.push(array[i]);
    } else {
      greater.push(numbers[i]);
    }
  }
  let result = [];
  return result.concat(quickSort(less), pivot, quickSort(greater));
};
