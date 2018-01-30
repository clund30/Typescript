// var x : number = 0;
// while (x <= 10) {
//   console.log(x);
//   x++;
// }
var things = [3, 4, 64, 7, 86];
//for in
//Gives index of array
console.log("For/In");
for (var thing in things) {
    console.log(thing);
}
//for of
//gives value of index
console.log("For/Of");
for (var _i = 0, things_1 = things; _i < things_1.length; _i++) {
    var thing = things_1[_i];
    console.log(thing);
}
//# sourceMappingURL=014_loops.js.map