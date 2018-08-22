
const main = document.querySelector("#main");
const paragraph = document.querySelector("p");
const input = document.querySelector("input");

main.addEventListener('click', (event) => {
  alert("Hey, you clicked me!");
}); 

paragraph.addEventListener('click', (event) => {
  paragraph.style.backgroundColor = "yellow";
  alert("Hey, you clicked the p tag");
});

input.addEventListener("keydown", e => {
  console.log(e.which);
})