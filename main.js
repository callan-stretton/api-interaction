var proverbP = document.getElementById("proverb");
var translationP = document.getElementById("translation");

function getProverb (evt) {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://eda-te-reo.herokuapp.com/api/proverbs');
  xhr.onload = function () {
    var ranProverb = JSON.parse(xhr.responseText);
    console.log(ranProverb.source);
    console.log(ranProverb.translation);
    proverbP.innerHTML = 'Proverb: ' + ranProverb.source;
    translationP.innerHTML = 'Meaning: ' + ranProverb.translation;
  };
  xhr.send();
};

function addProverb(){

}
