// // Question 1: Create an array with 5 
// // items: a,b,c,d,e,f; then console log the array

// let arr = ["a", "b", "c", "d", "e","f"];
// console.log(arr)

// // Question 2: Console log the first 
// // first and last item in the array from question 1
// console.log(arr[0]);
// console.log(arr[arr.length-1]);


// Question 1: Create this array - [1,2,3] 
// then add'4' to the end using push()

// let arr1 = [1,2,3];
// arr1.push(4)
// console.log(arr1)


// // Question 2: Create this array - [a,b,c] then add 'd' 
// // to the end using push()
// let arr2 = ["a","b","c"];
// arr2.push("d")
// console.log(arr2)

// // Question 3:
// //         Decalare an empty arrayUsing a 
// //         for loop add the number 0 - 10 to the array

// let arr3 = [];
// for(i = 0; i<=10; i++){
//     arr3.push(i)
// }
// console.log(arr3)

// // Question 3: Create this array - [4,5,6,7] then remove '7'
// // from it using pop()

// let arr4 = [4,5,6,7];
// arr4.pop()
// console.log(arr4)


// // Question 4: Create this array - [f,g,h,i] 
// // then remove 'i' from it using pop()

// let arr5 = ["f","g","h","i"];
// arr5.pop()
// console.log(arr5)

// Question 5: Create this array - [cats, dogs, birds] 
// then remove 'cats' at the start using shift()

// // with variable let del = ani.shift()
// let ani = ["cats","dogs","birds"];
// ani.shift()
// console.log(ani)

// Question 6: Create this array - [cake, cookies, ice cream,] 
// then add 'salad' from the start using unshift()

// let sweets = ["cake","cookies","ice cream"];
// sweets.unshift("salad")
// console.log(sweets) 

    // Using only pop, push, unshift, and shift make weekDays 
    // start at monday and end at sunday in the correct order

    // let weekDays = ["Friday", "Tuesday","Wednesday","Thursday","Sunday","Monday","Saturday","PlaceHolder"];
    // weekDays.pop()
    // weekDays.pop()
    // weekDays.pop()
    // weekDays.pop()
    // weekDays.shift()
    // weekDays.unshift("Monday")
    // weekDays.push("Friday","Saturday","Sunday")
    // console.log(weekDays)


    // Questio 9: Create the array - [1, 2, 3, 4, 5] 
    // then remove the first 3 items using splice()

    // let nums = [1,2,3,4,5]
    // nums.splice(0,3)
    // console.log(nums)

    // let refridge = ["Old bread","Banana","pizza","cucumber","icecream","Pasta","hotdog"]
    // Splice the unhealthy food out of the fridge(By your own judgement)

    // let refridge = ["Old bread","Banana","pizza","cucumber","icecream","Pasta","hotdog"]
    // refridge.splice(0,1);
    // refridge.splice();
    // console.log(refridge)

    // Question 8: Create 2 arrays - [1, 2, 3] & [4, 5, 6] 
    // then combine them together using concat()

    // let rome = [1,2,3]
    // let rome2 = [4,5,6]
    // let rome3 = rome.concat(rome2)
    // console.log(rome3)

    // // Question 7: Create 2 arrays - [a, b, c] & [d, e, f] 
    // // then combine them together using concat()

    // let alpha = ["a","b","c",]
    // let alpha2 =["d","e","f"]
    // let alpha3 = alpha.concat(alpha2)
    // console.log(alpha3)

    // Question 10: Create the array - [a, b, c, d, e, f, g] 
    // then create another array and fill it with the last 3 items from the 1st array

    // let alphy = ["a", "b", "c", "d", "e", "f", "g"];
    // let alphy2 = alphy.slice(4,7)
    // console.log(alphy)
    // console.log(alphy2)

    // Question 11: Create the arr - [1,2,3,4,5], 
    // then check if it has the number 4 in it using include()

    // let array = [1,2,3,4,5];
    // let check = array.includes(4);
    // console.log(check)


    // Bonus Question (if you finish the other question)
    // copy and paste this code into your file.

    // let nums = [];
    // for(let i = 0; i < 51; i++){
    //     nums.push(Math.floor(Math.random()*100))
    // }
    
    // Check if nums contains the number 7. if it does console.log("SEVEN ALERT!!!!")

    let nums = [];
    for(let i = 0; i < 51; i++){
        nums.push(Math.floor(Math.random()*100))
    }