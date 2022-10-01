// Create an array of objects, where each object describes a book and has properties 
// for the title (a string), author (a string), 
// and alreadyRead (a boolean indicating if you read it yet).
// Iterate through the array of books. For each book, log the book title 
// and book author like so: "The Hobbit by J.R.R. Tolkien".
// Now use an if/else statement to change the output depending on whether you read it yet or not. 
// If you read it, log a string like 'You already read "The Hobbit" by J.R.R. Tolkien', and if not, 
// log a string like 'You still need to read "The Lord of the Rings" by J.R.R. Tolkien.'



const books = [
{
    title: "Puddles",
    author: "Mr.Harper",
    readingStatus: true
},
{
    title: "Rain",
    author: "H. Stewart",
    readingStatus: false
},
{
    title: "Water",
    author: "Mrs. Raincoat",
    readingStatus: false
}];
// console.log(books)
{
for(let each = 0; each<books.length;each++){
// console.log(books[each]);
}
books.forEach((item) => console.log(item.title,  "by", item.author))

if(books[each].readingStatus == false){
console.log("You still need to read",item.title)
}
}
// else (item.readingStatus == true){
// }
// console.log("You already read",item.title)