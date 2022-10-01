// // -console.log() the full name and salary of anyone who's salary that is over 22500
// var list = [
//     {
//        "firstName": "Kiran",
//        "lastName" : "Kumar",
//        "salary"   : 25000
//        },
//     {
//        "firstName": "Mohan",
//        "lastName" : "Srivastav",
//        "salary"   : 20000
//       },
//     {
//        "firstName": "Mary",
//        "lastName" : "Kom",
//        "salary"   : 23000
//        }];
//       for(let each = 0; each<list.length; each++){
//       if(list[each].salary > 22500){
//         console.log("salary is over 22500",list[each])
//       }
//     }

// QUESTION 2
let myNums = [
{"x": 9,"y": 5},{"x": 6,"y": 3},{"x": 7,"y": 7},{"x": 5,"y": 5},{"x": 1,"y": 7},
{"x": 0,"y": 3},{"x": 7,"y": 3},{"x": 4,"y": 9},{"x": 8,"y": 8},{"x": 5,"y": 3},
{"x": 1,"y": 7},{"x": 7,"y": 5},{"x": 7,"y": 7},{"x": 6,"y": 0},{"x": 8,"y": 3},
{"x": 1,"y": 3},{"x": 3,"y": 2},{"x": 9,"y": 3},{"x": 7,"y": 6},{"x": 7,"y": 1},
]
var count = 0;
for(let i=0; i<myNums.length; i++){
if (myNums[i].x == myNums[i].y)
count++
}
console.log("x and y are the same " + count + " times")


// -Count the total number of objects in myNums where x and y are the same