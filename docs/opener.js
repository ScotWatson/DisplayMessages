/*
(c) 2022 Scot Watson  All Rights Reserved
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

const objInterface = (function () {
  let ret = {};
  ret.start = function () {
    let btnOpen = document.getElementById("open");
    btnOpen.addEventListener("click", function () {
      const myWindow = window.open("https://scotwatson.github.io/DisplayMessages/");
      window.addEventListener("message", function (e) {
        btnOpen.innerHTML += " - " + e.data;
      });
      setTimeout(function () { myWindow.postMessage("Hello World!", "https://scotwatson.github.io/DisplayMessages/"); }, 10000);
    });
  };
  return ret;
})();
