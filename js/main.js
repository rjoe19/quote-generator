var quoteText = ["AAhhh... much better! (after urinating)", "Come get some!", "Eat shit and die.", "Hail to the king, baby!", "I'll rip your head off and shit down your neck.", "It's time to kick ass and chew bubble gum... and I'm all outta gum."];

var min = 0;
var max = 5;

function genQuote() {
 var quote = quoteText[Math.round((Math.random() * (max - min) + min))];
  $("#insertQuote").html(quote);
}