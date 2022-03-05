console.log(window.opener)
window.addEventListener("message", function (e) {
  e.source.location = "https://www.google.com";
  document.body.appendChild(document.createTextNode(e.data));
});
