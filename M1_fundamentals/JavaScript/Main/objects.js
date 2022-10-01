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

// let students = {
//     info: {
//     iD : 365, 
//     name: "Stewie", 
//     phoneNumber: "4163333333",
//     emailAddress: "stewingstew@gmail.com",
//     marks: 84,
//     },

//     address: {
//     city: "Toronto",
//     country: "Canada",
// }
// };
// 1. Use for loop to display all keys and properties of student
// for(let key in students){

// console.log(key, "=>",students[key]);
// }

// 2. Without using for, display :student John with id(1) and country(US) got (45) marks
// console.log(students.info.name)
// console.log(students.info.iD)
// console.log(students.address.country)
// console.log(students.info.marks)

// console.log(students)
// // added 
// students.info.qualifications=true,
// students.address.streetNumber=15;
// console.log(students)
// // deleted
// delete students.info.iD;
// delete students.address.country;
// console.log(students)

// console.log("keys", Object.keys(students))
// console.log("values", Object.values(students))


// QUESTION BOOKS
// let books = {
//     author : "Jim Taylor", 
//     title: "Marvelous", 
//     year: "1982",
//     }
//     books.publisher="Sail Media",

//     //Display Keys
//     console.log("keys", Object.keys(books))
//         //Display Values
//     console.log("values", Object.values(books))
//         //Display Properties
//     console.log("properties", Object.entries(books))



// Question 1: Create an object countryCap = {Canada: "Ottawa:, America: "Washingoton", Japan: "Tokyo", Australia: "Sidney"}, 
// then loop through it and console log all the keys (the names of stuff)

// let countryCap = {
//     Canada: "Ottawa",
//     America: "Washington",
//     Japan: "Tokyo",
//     Australia: "Sydney"
// }
// console.log("keys",Object.keys(countryCap));

// for (let items in countryCap){
//     console.log("Capital",countryCap[items])
// }
    

// Loop through the videogames object and console.log() the key and the value
// If a key's value is undefined don't console.log() it.

// let videoGames = {
//     action: "Bloodborne",
//     fighting: "Tekken 7",
//     racing: undefined,
//     rhythm: "Osu!",
// };

// for(let items in action){
//     console.log("Properties",Object.entries(videoGames))

// if (videoGames.racing == undefined){
//     console.log();
//     }


// Question 2: Create on object - arcade {game: 'Street Fighter 2', releaseDate: Feb 1991, characters: 
// ['ryu', 'ken', 'chun-lee']}. Console log the second element inside the characters array in the arcade obj

// Question 3: In the earlier arcade obj, 
// console log all the items in the characters array using forEach()



let person = {
        firstName : "Bob", 
        lastName: "Fantastic", 
        phone: "416 733 8555",
        email: "bob@gmail.com"
        }
        let count = 0;
        for(let key in person){
        //     count = count+1;
        //     console.log(key,"=",person[key]);
        
        for(let i = 0; i<count; person[key].length;,i++){
        console.log(match[key][i]);
        }
    }


//     console.log(count[i])
//    }
