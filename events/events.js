



// var div = document.querySelector("div");

// var logText = function(event) {
//   console.log(event.target.textContent);
// }

// div.addEventListener("click", logText);


var paragraphs = document.querySelectorAll('p');

var eventHandler = function() {
  console.log("Woof!");
}
for (var i = 0; i < paragraphs.length; i++) {
  paragraphs[i].addEventListener('click', eventHandler);
}