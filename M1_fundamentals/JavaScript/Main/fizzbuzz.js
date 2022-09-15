    // for(let i = 5; i <=30; i+=5);{
    //     console.log(i, " buzz");
    //   }
    //   for(let i = 3; i<=30; i+=3){
    //     console.log(i, " fizz");
    //  }
    //for multiples of 3 print fizz for multiples of 5 print buzz 
//for multiples of 3 and 5 print fizz buzz

for( let i = 0; i <=30; i++){
    if(i % 3 == 0){
        console.log( i + " fizz")
    }
    if(i % 5 == 0){
        console.log(i + " buzz")
    }
    if(i % 3 == 0 && i % 5 == 0)
    console.log( i + " fizzbuzz")
}
