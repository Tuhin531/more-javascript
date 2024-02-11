const friends = [12, 13, 14, 3 ,13 ,15 ,20 ,29];

const partial = friends.splice(2, 5, 99, 55, 7777);
console.log(partial);
console.log(friends);