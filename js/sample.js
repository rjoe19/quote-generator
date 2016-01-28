var quotes = [
  {
  "quote" : "Footsteps always follow us, whenever it is snowing. They always show us where we've been, but never where we're going.",
  "author" : "Winnie the Pooh's A-Z"
  },
  {
  "quote" : "I have decided to make my life my argument.",
  "author" : "Albert Schweitzer"
  },
  {
  "quote" : "Do not go gentle into that good night. Rage, rage against the dying of the light.",
  "author" : "Dylan Thomas"
  },
  {
  "quote" : "There are two types of people in this world. Those that enter a room and say 'Here I am!' and those that enter a room and say 'There you are!'.",
  "author" : "Unknown"
  },
  {
  "quote" : "Now it's a sqirt mecca for mystery artist, but back then it was just magic.",
  "author" : "Jim Snyder on Kayaking"
  },
  {
  "quote" : "Because it's there.",
  "author" : "George Mallory on climbing mountains"
  },
  {
  "quote" : "For I know the plans that I have for you.",
  "author" : "Ashley Stanbridge"
  },
  {
  "quote" : "The significant problems we face cannot be solved at the same level of thinking we were at when we created them.",
  "author" : "Albert Einstein"
  },
  {
  "quote" : "I got a highschool crush on a california girl, oh yeah. I got a cool guitar and a bag of marijuana man, oh woah oh.",
  "author" : "Joseph Quested"
  },
];

var previousQuoteIndex;

function getRandomQuote (array) {
  var index = Math.floor(Math.random() * ((array.length - 1) - 0 + 1)) + 0;
  if (index != previousQuoteIndex) {
    previousQuoteIndex = index;
    console.log("This is a fresh quote!");
    return array[index];

  } else {
    console.log("This is an old quote...");
    return getRandomQuote(array);
  }
}

function returnQuoteBody(object) {
  return object.quote;
}

function returnQuoteAuthor(object) {
return object.author;
}

function initiateNewQuote() {
  var field = $(".text");
  clearTextField(field);
  var quote = getRandomQuote(quotes);
  displayQuote(quote, field);
  generateTwitterButton(quote);
}

function clearTextField(field) {
  field.empty();
}

function displayQuote(quote, field) {
  field.append(returnQuoteBody(quote) + "<br><br> - " + returnQuoteAuthor(quote));
}

function generateTwitterButton(quote) {
 $("#container").empty();
  twttr.widgets.createShareButton(
  ' ',
  document.getElementById('container'),
  {
    text: returnQuoteBody(quote) + ' - ' +
    returnQuoteAuthor(quote),
    url : ""
  }
);
}