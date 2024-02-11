// 1.show output from 1 to 50
//  if the number is divide by 3 then it instead of the number , show foo;
//  if the number is divide by 5 then it instead of the number , show Bar;
//  if the number is divide by 3 and 5 then it instead of the number , show fooBar;

 for(i=1; i<=50; i++){
    console.log(i);
    if(i % 5 == 0 && i % 3 == 0){
        console.log('FooBar');
    }

    else if(i % 3 == 0){
        console.log('foo');
    }
    else if(i % 5 == 0){
        console.log('Bar');
    }
    else{
        console.log(i);
    }
 }