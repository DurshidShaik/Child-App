let Rules = document.querySelector(".Rules");
let Play = document.querySelector(".Play");
let More_games = document.querySelector(".More-games");
let com_value = document.querySelector(".com-value");
let cross = document.querySelector("#cross");
let container_values = document.querySelector(".left");

let main_container = document.querySelector(".container");

let pic = document.querySelector(".pic");


//play button
Play.addEventListener("click", () => {
  main_container.style.transform = `scale(1)`;
  pic.style.display = "none";
});

//cross button
cross.addEventListener("click", () => {
  main_container.style.transform = `scale(0)`;
  pic.style.display = "block";
});

let array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 100]; // Array of numbers

function Random() {
  //Random Generating of Numbers
  random_value = array[Math.floor(Math.random() * array.length)];
  com_value.innerHTML = random_value;
}


//two function for every succesful matching
function make_num() {
  //first function
  let box = "";
  for (let i = 0; i < 12; i += 2) {
    box += `<div class="addclass" >${array[i]}</div>`;
  }
  container_values.innerHTML = box;
  for (let i = 1; i < 12; i += 2) {
    box += `<div class="addclass" >${array[i]}</div>`;
  }
  container_values.innerHTML = box;
}

function make_num_two() {
  //second function
  let box = "";
  for (let i = 11; i >= 0; i--) {
    box += `<div class="addclass"> ${array[i]} </div>`;
  }
  container_values.innerHTML = box;
}



//event checking
let value = 0;

container_values.addEventListener("click", (dets) => {
  //event for checking whether matches or not
  integer_value = parseInt(dets.target.innerHTML);
  if (integer_value == random_value) {
  
    correct.style.scale = 1;
    setTimeout(() => {
      correct.style.scale = 0;
    }, 1000);
    if (value % 2 === 0) {
      make_num();
      value++;
    } else {
      make_num_two();
      value++;
    }
    Random();
  } else {
    wrong.style.scale = 1;
    setTimeout(() => {
      wrong.style.scale = 0;
    }, 1000);
  }
});



//pop up about result correct or wrong
let correct = document.querySelector(".correct");
let wrong = document.querySelector(".wrong");



//rules of game 

let rules_popup = document.querySelector(".rules");
let cross_rules = document.querySelector("#cross-rules")

Rules.addEventListener("click",()=>{
  rules_popup.style.display = "block";
})
cross_rules.addEventListener("click",()=>{
  rules_popup.style.display = "none";
})


/* make_num() */
make_num_two();
Random();
