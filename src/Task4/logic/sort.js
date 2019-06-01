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

const swap = (arr, i, j) => {
  let swap = arr[i];

  arr[i] = arr[j];
  arr[j] = swap;
};

export const cocktailSort = array => {
  if (array.length <= 1) return array;

  let numbers = makeNumberArray(array);

  let left = 0;
  let right = numbers.length - 1;

  while (left < right) {
    for (let i = left; i < right; i++) {
      if (numbers[i] > numbers[i + 1]) {
        swap(numbers, i, i + 1);
      }
    }

    right--;

    for (let i = right; i > left; i--) {
      if (numbers[i] < numbers[i - 1]) {
        swap(numbers, i, i - 1);
      }
    }

    left++;
  }

  return numbers;
};
