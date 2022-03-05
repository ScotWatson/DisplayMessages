console.log(window.opener)
window.opener.location.href = "https://www.google.com";
window.addEventListener("message", function (e) {
  e.source.location = "https://www.google.com";
  document.body.appendChild(document.createTextNode(e.data));
});
