const numsArray = [1, 5, 3, 2];

const targetNumber = 6;

const f = (numsArray, targetNumber) => {
  const numsResultArray = [];
  numsArray.sort();
  numsArray.map((num) => {
    if (num <= targetNumber) numsResultArray.push([num]);
  });
  let previusNum = -1;
  let repeated = false;
  numsArray.map((num2) => {
    previusNum = num2;
    numsResultArray.map((subArray, index) => {
      if (
        subArray.reduce((a, b) => {
          return a + b;
        }, 0) +
          num2 <=
          targetNumber &&
        !subArray.includes(num2) &&
        !(subArray.length === 1 && previusNum === subArray[0])
      )
        numsResultArray[index] = [...subArray, num2];
    });
  });
  const result = numsResultArray.filter((array) => {
    if (
      array.reduce((a, b) => {
        return a + b;
      }, 0) == targetNumber
    )
      return array;
  });
  return result;
};

console.log(f(numsArray, targetNumber));
