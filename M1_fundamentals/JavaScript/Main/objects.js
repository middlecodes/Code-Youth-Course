// 1)
//         Create an object called user
//         Create three keys called username, password, loggedIn
//         Set there values as a string for username, 
//         a string for password, and a boolean      for loggedIn

        // let user = {
        //     username : "pacotheGreat",
        //     password : "iCauseTerror",
        //     loggedIn : true
        // }
        // console.log(user)
        
        // 2)
        // Create an object called employee
        // Create four keys called name, employeeId, lastActive, salary
        // Set the values as a string for name, an integer for 
        // employeeId, a date for lastActive, and a float for salary

        // let employee = {
        //     name: "Jeff",
        //     employeeId: 17365,
        //     lastActive: (new Date()),
        //     salary: parseFloat(80000)
        // }
        // console.log(employee)
        
        // 3)
        // Fix the following Object

        // let myObj = {
        //     name : "Bifli",
        //     grade : 42,
        //     notes:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis, aspernatur?",
        // }
        // console.log(myObj)

    
        // 4)
        // True or False
        // You can't put keys in quotes - fasle, but why would you?

        // Question 5: Create the following object myCats = {cat1 : "wiggles", cat2: "fluffy", cat3: "sir meowsalot"}. 
        // Now, console log the name of the 3rd cat.

    //     let myCats = {
    //     cat1 : "wiggles", 
    //     cat2: "fluffy", 
    //     cat3: "sir meowsalot",
    // }
    // console.log(myCats.cat3)

//     Question 6: Create the following object 
//     myGames = {action: "Uncharted", shooter: "MW2", horror: "Resident Evil"}. 
        // Now console log the name of the action game.

// let myGames = {
//     action: "Uncharted", 
//     shooter: "MW2", 
//     horror: "Resident Evil",
// }
// console.log(myGames.action)


// Question 7: Create any object and then nest another object inside it

// let icecream = {
//     opt1: {
//     flavour1 : "chocolate",
//     flavour2 :  "vanilla",
//     flavour3 : "swirl swirl",
//     },
//     opt2: {
//         flavour1: "cookies n cream",
//         flavour2: "butter pecan",
//         flavour3: "pistachio",
//     },
// };
// console.log(icecream)

// Question 8: Create an object named 'workPlace' and then nest 3 objects inside with the names 'employee1', 'employee2' etc. 
// and in each employee object, create the keys: name, id, hireDate (fill whatever value you want inside these)

// let workPlace = {

//     employee1: {
//     name: "Rob",
//     id: 289812,
//     hireDate: (new Date())
//     },

//     employee2: {
//         name: "Sally",
//         id: 272681,
//         hireDate: (new Date(2022,9,02))
//     }
// }
//     console.log(workPlace)

let students = {
    info: {
    iD : 365, 
    name: "Stewie", 
    phoneNumber: "4163333333",
    emailAddress: "stewingstew@gmail.com",
    marks: 84,
    },

    address: {
    city: "Toronto",
    country: "Canada",
}
};
console.log(students)
// added 
students.info.qualifications=true,
students.address.streetNumber=15;
console.log(students)
// deleted
delete students.info.iD;
delete students.address.country;
console.log(students)

 

