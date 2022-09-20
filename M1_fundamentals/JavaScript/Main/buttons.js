// let button1 = true
//         let button2 = false
//         let button3 = true

//         Write two functions, one called Fail, and one called Pass. inside each function console.log a message like "Test Passed" or "Test Failed"
//         then if button1 is true and either button2 or button3 is true call the pass function
//         Otherwise call the fail function

    let button1 = true;
    let button2 = false;
    let button3 = true;

function fail(){
console.log("test failed")
}
function pass(){
console.log("test passed")
}

if
(button1 == true && button2 == true || button3 == true){
    pass();
}

else{
    fail();
}
