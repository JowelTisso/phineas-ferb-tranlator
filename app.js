var btnTranslate = document.querySelector("#btn-translate");
var inputText = document.querySelector("#input");
var outputText = document.querySelector("#outputText");

var url = "https://api.funtranslations.com/translate/ferb-latin.json";

function getUrl(text) {
  return encodeURI(url + "?" + "text=" + text);
}

function onTranslate() {
  var fetchurl = getUrl(inputText.value);
  fetch(fetchurl)
    .then((res) => res.json())
    .then((json) => {
      var translatedText = json.contents.translated;
      outputText.innerText = translatedText;
    })
    .catch((err) => {
      console.log(err);
    });
}

btnTranslate.addEventListener("click", onTranslate);
