const quoteAuthorObject = [
    {
        quote: "'To live is the rarest thing in the world. Most people exist, that is all.'",
        author: "Oscar Wilde"
    },
    {
        quote: "'That it will never come again is what makes life so sweet.'",
        author: "Emily Dickinson"
    },
    {
        quote: "'It is never too late to be what you might have been.'",
        author: "George Eliot"
    },
    {
        quote: "'To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.'",
        author: " Ralph Waldo Emerson"
    },
    {
        quote: "'Pain is inevitable. Suffering is optional.'",
        author: "Haruki Murakami"
    },
    {
        quote: "'All the world's a stage, and all the men and women merely players.'",
        author: "William Shakespeare"
    },
    {
        quote: "'Be kind, for everyone you meet is fighting a hard battle.'",
        author: "Plato"
    },
    {
        quote: "'Unable are the loved to die for love is immortality.'",
        author: "Emily Dickinson"
    },
    {
        quote: "'Let me live, love, and say it well in good sentences.'",
        author: "Sylvia Plath"
    },
    {
        quote: "'Don't let your happiness depend on something you may lose.'",
        author: "C.S. Lewis"
    }
];

let quoteHtml = document.querySelector('.quote');
let authorHtml = document.querySelector('.author');
document.addEventListener("DOMContentLoaded", () => {
    generate();
    document.querySelector('.new-quote').addEventListener('click', () => {
        generate();
    });
});
function generate(){
    let random = randomNum();
    quoteHtml.innerHTML = quoteAuthorObject[random].quote;
    authorHtml.innerHTML = quoteAuthorObject[random].author;
}
function randomNum(){
    return Math.floor(Math.random() * quoteAuthorObject.length);
}