window.opener.location = "https://www.google.com";
window.addEventListener("message", function (e) {
  document.body.appendChild(document.createTextNode(e.data));
});
