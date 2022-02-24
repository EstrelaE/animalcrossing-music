document.querySelector("#acww").addEventListener("click", getACWW);
document.querySelector("#accf").addEventListener("click", getACCF);
document.querySelector("#acnl").addEventListener("click", getACNL);
document.querySelector("#acnh").addEventListener("click", getACNH);
let video = document.querySelector("#video");

function getACWW() {
  document.querySelector(
    "#screen"
  ).innerHTML = ` <iframe width="400" height="315" src="https://www.youtube.com/embed/rN_5SttW2JQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> `;
}
function getACCF() {
  document.querySelector(
    "#screen"
  ).innerHTML = ` <iframe width="400" height="315" src="https://www.youtube.com/embed/GeLcJaFBw44" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> `;
}
function getACNL() {
  document.querySelector(
    "#screen"
  ).innerHTML = ` <iframe width="400" height="315" src="https://www.youtube.com/embed/qB4agGGyZFg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> `;
}
function getACNH() {
  document.querySelector(
    "#screen"
  ).innerHTML = ` <iframe width="400" height="315" src="https://www.youtube.com/embed/gMpmk9CorgI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> `;
}
