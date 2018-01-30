var family : string[] = ['Casey', 'Sydney', 'Auria'];
var counter : number = 0;

(function() {
  for (let name in family) {
    counter++;
  }
})();

console.log(counter);