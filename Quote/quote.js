//Array of quotes
const quotes = [
  { quote: "Stay Hungry. Stay Foolish.", name: "Steve Jobs" },
  { quote: "Good Artists Copy, Great Artists Steal.", name: "Pablo Picasso" },
  { quote: "Argue with idiots, and you become an idiot.", name: "Paul Graham" },
  {
    quote: "Be yourself; everyone else is already taken.",
    name: "Oscar Wilde",
  },
  {
    quote: "Simplicity is the ultimate sophistication.",
    name: "Leonardo Da Vinci",
  },
];

//target quote button
const quoteBtn = document.querySelector("#quoteBtn");
//target author attribute
const quoteAuthor = document.querySelector("#quoteAuthor");
//target quote attribute
const quote = document.querySelector("#quote");

//add event listener to button
quoteBtn.addEventListener("click", displayQuote);

//randomize function
function displayQuote() {
  //random math function
  let number = Math.floor(Math.random() * quotes.length);
  //print out author from array
  quoteAuthor.innerHTML = quotes[number].name;
  //print out quote from array
  quote.innerHTML = quotes[number].quote;
}
