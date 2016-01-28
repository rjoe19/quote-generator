<<<<<<< HEAD
var quoteText = {
	"dukeQuotes": [{
		"quote": "It's time to abort your whole friggin' species.",
		"sound": "/quotes/sound/abort.wav"
	}, {
		"quote": "I'm gonna get medieval on your asses.",
		"sound": "/quotes/sound/medieval.wav"
	}, {}, {
		"quote": "Hmmm. Don't have time to play with myself.",
		"sound": "/quotes/sound/play.wav"
	}, {}, {
		"quote": "Damn! You're ugly.",
		"sound": "/quotes/sound/ugly.wav"
	}, {}, {
		"quote": "You guys suck!",
		"sound": "/quotes/sound/you-suck.wav"
	}, {}, {
		"quote": "My name's Duke Nukem.",
		"sound": "/quotes/sound/name.wav"
	}, {}, {
		"quote": "Go ahead – make my day.",
		"sound": "/quotes/sound/my-day.wav"
	}, {}, {
		"quote": "It's time to kick ass and chew bubblegum... and I'm all outta gum.",
		"sound": "/quotes/sound/out-of-gum.wav"
	}, {
		"quote": "Damn! I'm lookin' good!",
		"sound": "/quotes/sound/good2.wav"
	}]
};
var min = 0;
var max = 9;

var quote;
var audio;
var index;

function genQuote() {
	index = Math.round((Math.random() * (max - min) + min));
	quote = quoteText.dukeQuotes[index].quote;
	audio = new Audio(quoteText.dukeQuotes[index].sound);
	$("#insertQuote").html(quote);
	runAudio(audio);
	generateTweet(quote);

};

function runAudio(audio) {
	audio.play();
}


function generateTweet(quote) {
	$("#tweet").empty();
	twttr.widgets.createShareButton(
  'https://dev.twitter.com/',
  document.getElementById('tweet'),
  {
    text: quote
  }
)
};
=======
var quoteText = ["AAhhh... much better! (after urinating)", "Come get some!", "Eat shit and die.", "Hail to the king, baby!", "I'll rip your head off and shit down your neck.", "It's time to kick ass and chew bubble gum... and I'm all outta gum."];

var min = 0;
var max = 5;

function genQuote() {
 var quote = quoteText[Math.round((Math.random() * (max - min) + min))];
  $("#insertQuote").html(quote);
}
>>>>>>> e0c28c9e229e870e02d64648f500554386e5d8d0
