let map = new Map();
map.set("name", "John");
map.set("ali", "ahmad");
map.set("mohtashami", "reza");
console.log(map);
let keys = map.keys();
console.log(keys);
// keys.push("more");
// keys تبدیل به یک ابجکت میشه و نمیشه به ابجکت چیزی را پوش کرد
// keys.set("more");
let key = Array.from(map.entries());
console.log(key);
