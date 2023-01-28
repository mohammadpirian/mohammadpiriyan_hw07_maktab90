let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};
let list;
list = Object.entries(salaries);
function topsalary(a) {
  let sortarray = a.sort((a, b) => b[1] - a[1]);

  return sortarray;
}
console.log(topsalary(list)[0][0]);
