function generate(){

    let quotes = {
        " - Rosa Parks" : '"I have learned over the years that when ones mind is made up, this diminishes fear; knowing what must be done does away with fear."',
        " - Langston Hughes" : '"Hold fast to dreams, for if dreams die, life is a broken-winged bird that cannot fly."', 
        " - Dr. Mae Jemison" : '"Never be limited by other peoples limited imaginations."',
        " - Serena Williams" : '"I am lucky that whatever fear I have inside me, my desire to win is always stronger."',
        " - Duke Ellington" : '"Life has two rules: number 1, never quit! Number 2, always remember rule number one"',
        " - James Baldwin" : '"The world is before you, and you need not take it or leave it as it was when you came in."'


    }
    let authors = Object.keys(quotes);

    let author = authors[Math.floor(Math.random () * authors.length)]

    let quote = quotes[author];

    document.getElementById("quote").innerHTML = quote;
    document.getElementById("author").innerHTML = author;


}

