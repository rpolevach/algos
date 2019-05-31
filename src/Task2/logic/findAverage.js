export const findAverage = array => {
  let sum = 0;

  array.forEach(el => {
    sum = sum + el;
  });

  return sum / array.length;
};
