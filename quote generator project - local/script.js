//get element
const button = document.querySelector("#button");
const quote = document.querySelector("#quote");

// create variable
let quotes = [
  "Without courage we cannot practice any other virtue with consistency. We can't be kind, true, merciful, generous, or honest. - Maya Angelou",
  "Better keep yourself clean and bright. You are the window through which you must see the world. - George Bernard Shaw",
  "A wise man can learn more from a foolish question than a fool can learn from a wise answer. - Bruce Lee",
  "The more we value things outside our control, the less control we have. - Epictetus",
  "There will come a time when you believe everything is finished. That will be the beginning. - Louis L’Amour",
  "There will come a time when you believe everything is finished. That will be the beginning. - Louis L’Amour",
  "There will come a time when you believe everything is finished. That will be the beginning. - Louis L’Amour",
  "There will come a time when you believe everything is finished. That will be the beginning. - Louis L’Amour",
  "There will come a time when you believe everything is finished. That will be the beginning. - Louis L’Amour",
];
// console.log(quote);

// display quote
button.addEventListener("click", function () {
  let randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  quote.innerHTML = randomQuote;
});
