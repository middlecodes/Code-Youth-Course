// Question 1: Create the array - [1, 2, 3], then console log 
// "This is an array item" for each item in the array using forEach()

// let arr = [1,2,3]
// arr.forEach(function (thing){
//     console.log(thing,"This is an array item")
// });

// // space 
// console.log("")
// // Question 2: Create the array - [a, b, c] then using forEach, console log each item in 
// // teh array and next to it the phrase: "This is a letter of the alphabet".

// let arrAlpha = ["a","b","c"]
// arrAlpha.forEach(function (thing){
//     console.log(thing,"This is a letter of the alphabet")
// });


// Question 3: Create the array - [10, 13, 25, 8, 30, 45], then in an a new array, 
// get all the numbers that are under 20 from the 1st array.

// let digits = [10, 13, 25, 8, 30, 45];
// let digits2 = digits.filter(function(item){
// return item >20;
// });
// console.log(digits)
// console.log()
// console.log(digits2)

// console.log()
// // Quesion 4: Create the array - [5, 12, 17, 2, 19,], then create a new array  
// // that has all the number from the 1st array that are larger than 10

// let numz = [5, 12, 17, 2, 19,];
// let numz2 = numz.filter(function(item){
// return item > 10;
// });
// console.log(numz)
// console.log()
// console.log(numz2)



// Bonus questions:: Create the array - ['paper', 'rock', 'pencil', 'paper'], 
// then create a new array using filter with all the words: 'paper'

// let compete = ['paper', 'rock', 'pencil', 'paper'];
// let compete2 = compete.filter(function(item){
// return item == 'paper';
// });
// console.log(compete2)

// Question 6: Create the following array - ['cat', 'mouse', 'hamster'] 
// then create a new array that has items from the 1st array that have less then 6 characters.

// let pets = ['cat', 'mouse', 'hamster'] 
// let pets2 = pets.filter(function(item){
//     return item.length<6;
// });
// console.log(pets2)



// Question 6: Create the array - [2, 4, 6, 8] 
// then in a new array, get each number from the 1st array divided by 2

// let array = [2, 4, 6, 8]; 
// let array2 = array.map(function(item){
// return item / 2;
// });
// console.log(array2)



// // Question 7: Create the array - [3, 6, 9, 12] 
// // then in a new array, get each number from the 1st array and multiply by 2
// let arr = [3, 6, 9, 12] 
// let arr2 = arr.map(function(item){
// return item * 2;
// });
// console.log(arr2)


// !Bonus Question!

// let cost = [19.99, 5.99, 13.50, 9.99, 0.99, 47.99, 315.11] *

// -Using map calculate the tax on all the items in cost | (price * 13) / 100 | *

// -Using forEach add the tax to each item in cost

// -Using the cost array find the items that are more than $20 using filter
 
// -if there are 4 or more items that cost more than $20 console.log("Apply Deal") otherwise console.log("No Deal")



let cost = [19.99, 5.99, 13.50, 9.99, 0.99, 47.99, 315.11]
let tax = cost.map(function(item){
    return  item * 13 / 100
});
// console.log(tax)

cost.forEach(function (item){
    return cost + tax
});
console.log(cost)


// Answer 
// let cost = [19.99, 5.99, 13.50, 9.99, 0.99, 47.99, 315.11];
//     let tax = cost.map((num)=>{return (num * 13) / 100})
//     console.log(tax)
    
//     cost.forEach((price, i)=>{
//         cost[i] = price + tax[i]
//     })
//     console.log(cost)

//     let deal = cost.filter((abv20) => {return abv20 >= 20})
//     if(deal.length >= 4){
//         console.log("Apply Deal")
//     }else{
//         console.log("No Deal")
//     }