const btnOpen = document.createElement("button");
btnOpen.innerHTML = "Open";
btnOpen.addEventListener("click", function () {
  const myWindow = window.open("https://scotwatson.github.io/DisplayMessages/");
  setInterval(function () { myWindow.postMessage("Hello World!"); }, 1000);
});
document.body.appendChild(btnOpen);
window.addEventListener("message", function (e) {
  console.log(e);
  document.body.appendChild(document.createTextNode(e.data));
});
