var proverbP = document.getElementById("proverb"); // proverb paragrpah id
var translationP = document.getElementById("translation"); // translation paragrpah id

function getProverb (evt) { // runs when button clicked
  var xhr = new XMLHttpRequest(); // defining my XML HTTP Request variable
  xhr.open('GET', 'https://eda-te-reo.herokuapp.com/api/proverbs'); // initialising my request
  proverbP.innerHTML = "Loading..."; // shows this while loading
  xhr.onload = function () {
    var ranProverb = JSON.parse(xhr.responseText); // brings in data as JS object
    proverbP.innerHTML = ranProverb.source; // only selecting the source(proverb) property
    translationP.innerHTML = ranProverb.translation; // only selecting the translation(meaning) property
  };
  xhr.send(); // sends out XML HTTP Request
};

function sendTweet() { // runs when button clicked
  var url = "https://twitter.com/intent/tweet";
  var text = document.getElementById("proverb").innerHTML;
  var hashtags = "MaoriProverbsRock";
  var via = "username";
  window.open(url + "?text=" + text + ";hashtags=" + hashtags, "", "width=500, height=300"); // opens new window with text ready to send via Twitter
}
