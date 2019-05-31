export const findMax = array => {
  let max = array[0];
  console.log(max);

  for (let i = 0; i < array.length; i++) {
    console.log(typeof array[i]);
    if (array[i] > max) {
      max = array[i];
    }
  }

  return max;
};

export const findMin = array => {
  let min = array[0];

  array.forEach(el => {
    if (el < min) min = el;
  });

  return min;
};
