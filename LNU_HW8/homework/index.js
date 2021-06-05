function isEquals(a, b) {
  return a === b;
}

function numberToString(num) {
  return num + "";
}
function storeName(...names) {
  return names;
}

function getDivision(a, b) {
  let result;
  result = b > a ? b / a : a / b;
  return result < 1 ? null : result;
}
function negativeCount(arr) {
  const int = (element) => !Number(element);
  if (Array.isArray(arr) && !arr.some(int)) {
    let counter = 0;
    arr.forEach((element) => {
      element < 0 ? counter++ : null;
    });
    return counter;
  }
}

console.log(isEquals(3, 3));
console.log(numberToString(124312));
console.log(storeName("david", "arahamia", "PogChamp"));
console.log(getDivision(2, 5));
console.log(negativeCount([-12, 12, -21, -213412, 124123, 12]));
