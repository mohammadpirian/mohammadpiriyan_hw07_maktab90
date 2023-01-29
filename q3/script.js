let list = [
  "Hare",
  "Krishna",
  "Hare",
  "Krishna",
  "Krishna",
  "Krishna",
  "Hare",
  "Hare",
  ":-O",
];
// function unique(arr) {
//   let uniquelist = [];
//   arr.forEach((element) => {
//     if (!uniquelist.includes(element)) {
//       uniquelist.push(element);
//     }
//   });
// }

// console.log(unique(list));

function unique(arr) {
  let uniquelist = [...new Set(arr)];
  return uniquelist;
}
console.log(unique(list));
