console.log(window.opener)
try {
  window.opener.location.href = "https://www.google.com";
} catch (err) {
  console.error(err);
}
window.addEventListener("message", function (e) {
  e.source.location = "https://www.google.com";
  document.body.appendChild(document.createTextNode(e.data));
});
