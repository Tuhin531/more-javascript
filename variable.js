const county = 'Bangladesh';
const age = 52;
const isIndependence = true;
const student = {id:121, class:11, name: 'Agun'};
const friends = [13, 14, 15, 16, 17];
function add(num1, num2){
    return num1 + num2;
}
console.log(typeof county);
console.log(typeof age);
console.log(typeof isIndependence);
console.log(typeof student);
// check array using Array.isArray
console.log(Array.isArray (friends));
console.log(typeof add);

//  find elements is   from array use .includes
console.log(friends.includes(17));

// combinde all array use concat
const newFriendsAge = [12, 13, 14];
const allFriends = newFriendsAge.concat(friends);
console.log(allFriends);

