// zip(array, array2)
// Merge two arrays with the values at their corresponding positions

// Example Input

var artists = ['Passion Pit', 'Mumford and Sons', 'MGMT'];
var albums = ['Gossamer', 'Sigh no more', 'Time to Pretend'];

// Example Output

// [ [ 'Passion Pit', 'Gossamer' ],
//   [ 'Mumford and Sons', 'Sigh no more' ],
//   [ 'MGMT', 'Time to Pretend' ] ]

function zip(arr1, arr2) {
  // console.log(arr1.concat(arr2));
  var rv = [];
  for (var i = 0; i < arr1.length; i++) {
    // console.log('hi');
    newArray = [];
    newArray.push(arr1[i], arr2[i]);
    rv.push(newArray);
  }
  console.log(rv);
  return rv;
}

zip(artists, albums);

