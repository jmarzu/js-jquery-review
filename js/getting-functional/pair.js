// pair(obj)
// Construct array pairs from objects.

// Example Input

var newObj = {
  "Brian": "Hague",
  "Sarah": "Hanley",
  "Lenny": "Urbanowski",
};

// Example Output

// [ [ 'Brian', 'Hague' ],
//   [ 'Sarah', 'Hanley' ],
//   [ 'Lenny', 'Urbanowski' ] ]

function pair(obj) {
  finishArray = []
  // var keys = Object.keys(obj);
  for (var property in obj) {
    newArray = [];
    newArray.push(property);
    newArray.push(obj[property]);
    finishArray.push(newArray);
  }
  return finishArray
}
console.log(pair(newObj));
