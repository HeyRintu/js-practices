let arr = ['a', 'b', 'c', 'd'];

// add value end of the array -- modifing the array
arr.push('e');
console.log(arr);

// slice array -- not modifing the array
let slice_array = arr.slice(0,2);
console.log(slice_array);

// spice array -- overwrite the array

let spice_arr = ['a', 'b', 'c', 'd', 'e', 'f']

spice_arr.splice(2,0,'x','y');
console.log(spice_arr);

spice_arr.splice(2,3,'x','y','z');
console.log(spice_arr);

// additon of two array

let aa = ['a', 'b', 'c'];
let bb = ['x', 'y', 'z'];

let cc = aa.concat(bb)
console.log(cc);

// copy array -- modifing the array
let copy_arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c']

let new_copy = copy_arr.copyWithin(2,9,12)
console.log(new_copy);

console.log(copy_arr);

// include operations

let include_arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c']
console.log(include_arr.includes(4,3));

// index of 

let index_arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c']
console.log(index_arr.indexOf(4));


// map

let map_arr = [1, 3, 9];
console.log(map_arr.map(x => x*x));


// reverse

let rev_arr = [1,2,3,4,5,6,7,8];

console.log(rev_arr.reverse());

//remove first element from the array -- modify the array
let shift_arr = ['a', 'b', 'c'];

shift_arr.shift();
console.log(shift_arr);

// sorting -- modify the array
let sort_arr = [45,2,69,78,1,4,]
sort_arr.sort()
console.log(sort_arr);

// add value at the beginning -- modify the array

let add_arr = [6,7,8,9]

add_arr.unshift(1,2,3,5);
console.log(add_arr);

// split array

let split_arr = "Hey yo howdy";

let new_split_arr = split_arr.split(" ");
console.log(new_split_arr);