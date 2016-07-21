// pluck(arr, key)
// Given an array of objects, pluck the object values associated with the provided key.

// Example Input

var albums = [
  { name: 'Gossamer', artist: 'Passion Pit' },
  { name: 'Sigh no more', artist: 'Mumford and Sons' },
  { name: 'Time to Pretend', artist: 'MGMT' }
];

// Example Output

// [ 'Passion Pit', 'Mumford and Sons', 'MGMT' ]

function pluck() {
  // console.log('in the function');
  for (var i = 0; i < albums.length; i++) {
    console.log(albums[i].artist);
  };
};

pluck()
// console.log(albums[0].name, albums[0].artist);

// console.log(pluck(a, b));
