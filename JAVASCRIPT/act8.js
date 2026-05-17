// act8.js - from lecture slide 35
function getInnerText() {
  alert(document.getElementById("example").innerText);
}
function getInnerHTML() {
  alert(document.getElementById("example").innerHTML);
}
function getTextContent() {
  alert(document.getElementById("example").textContent);
}
function setHTML() {
  document.getElementById("example").innerHTML =
    "<strong>Bold</strong> via innerHTML + <em>italic!</em>";
}
function resetText() {
  document.getElementById("example").innerHTML =
    " This paragraph element has excess spacing and has <span>a span element</span> inside.";
}