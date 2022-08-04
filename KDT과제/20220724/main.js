let numbers = [1, 2, 3, 4, 5, 6];
let reduce = numbers.reduce(function (sum, item, index, arr) {
console.log(sum, item, index, arr);
return sum + item;
})
