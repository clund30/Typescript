// var x : number = 0;

// while (x <= 10) {
//   console.log(x);
//   x++;
// }

let things : number[] = [3,4,64,7,86];

//for in
//Gives index of array
console.log("For/In")
for (let thing in things) {
  console.log(thing);
}

//for of
//gives value of index
console.log("For/Of")
for (let thing of things) {
  console.log(thing);
}