let list = [
  [12, 235, 23, 65],
  [127, 85, 53, 75, 5],
  [2, 23, 4, 1, 90, 94, 3],
];

function sortlist(a) {
  let arr = [];

  for (let i = 0; i < a.length; i++) {
    if (Array.isArray(a[i])) {
      arr = arr.concat(sortlist(a[i]));
    } else {
      arr.push(a[i]);
    }
  }
  return typeof arr[0] === "string"
    ? [...new Set(arr)].sort()
    : [...new Set(arr)].sort((num1, num2) => {
        return num1 - num2;
      });
}
console.log(sortlist(list));
