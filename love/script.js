function loveYou() {
  alert("I Love you too meri januuuuu! 😘❤️");
}

function moveAround() {
  var button = document.querySelector(".btn-no");
  var x = Math.random() * window.innerWidth;
  var y = Math.random() * window.innerHeight;
  button.style.position = "absolute";
  button.style.left = x + "px";
  button.style.top = y + "px";
}
