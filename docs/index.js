console.log(window.opener)
try {
  console.log(window.opener.location.href);
} catch (err) {
  console.error(err);
}
window.opener.postMessage("Success", "*");
window.addEventListener("message", function (e) {
  document.body.innerHTML += e.data;
});
