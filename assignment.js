// 1. convert radiant to degree

/* function radiantToDegree(radiantValue){
  const  degree = 57.2958 * radiantValue;

  return degree;

}
const result = radiantToDegree(4);
console.log(result); */



// 2. check whether the given file name a javaScript file or not.

/* function isJavaScriptFile(filename){

    return filename.split('.').pop().toLowerCase() === 'js';
     
}

const result1 = isJavaScriptFile('module.js');
console.log(' this is Javascript file ', result1); */



// 3. calculate to  total oil price that i have  to pay.
// diesel = 114;
// petrol = 130;
// octane = 135;

 /* function oilPrice(diesel, petrol, octane){
     const perLitterDiesel = 114;
     const perLitterPetrol = 130;
     const perLitterOctane = 135;

     const TotalDiesel = perLitterDiesel * diesel;
     const TotalPetrol = perLitterPetrol * petrol;
     const TotalOctane = perLitterOctane * octane;

     const totalPrice = TotalDiesel + TotalPetrol + TotalOctane;

     console.log(totalPrice);

}

const output = oilPrice(2, 0, 0);  */

// 4.
// reserved bus = 50;
// miro bus = 11;
// rest will go by public bus 
// public bus fare 250 



// publicBusFare

// 5.
//  {name:'Tom', friend:'Rock' } 
//  {name:'Rock, friend:'Tom' } 
//  return true
// isBestFriend

const friends = [
    {name:'Tom', friend:'Rock' }, 
    {name:'Rock', friend:'Tom'} 
]
function  isBestFriend(friends){
    for( let i=0; i< friends.length; i++){
        const myFriend = friends[i];
        if(myFriend.name === myFriend.friend){
            console.log('He is my Best friend')
        }
        else{
            console.log('He is not my best friend')
        }

        // console.log(myFriend);
    }
}
 const output = isBestFriend(friends);