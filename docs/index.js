const btnOpen = document.createElement("button");
btnOpen.innerHTML = "Open";
btnOpen.addEventListener("click", function () {
  const myWindow = window.open("https://scotwatson.github.io/DisplayMessages/");
  myWindow.postMessage("Hello World!");
});
document.body.appendChild(btnOpen);
window.addEventListener("message", function (e) {
  document.body.appendChild(document.createTextNode(e.data));
});
