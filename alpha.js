let array = [
  "T",
  "M",
  "S",
  "Y",
  "C",
  "G",
  "N",
  "R",
  "U",
  "B",
  "Z",
  "F",
  "D",
  "H",
  "E",
  "X",
  "I",
  "O",
  "A",
  "J",
  "P",
  "L",
  "K",
  "Q",
  "W",
  "V",
];
let play_btn = document.querySelector(".play-btn");
let game = document.querySelector(".game");
let left_box = document.querySelector(".left");
let right_box = document.querySelector(".right");
let cross = document.querySelector("#cross");
let com_value = document.querySelector(".com-value");
let correct = document.querySelector(".correct");
let wrong = document.querySelector(".wrong");
let rules_game = document.querySelector(".rules-game");
let cross_game = document.querySelector("#cross-rule");
let rule_btn = document.querySelector(".rule-btn");
// play btn access
play_btn.addEventListener("click", () => {
  game.style.transform = "translate(-50%,-50%) scale(1)";
});

//play button remove
cross.addEventListener("click", () => {
  game.style.transform = "translate(-50%,-50%) scale(0)";
});

//first  function to genereate random alphabates
function Generate_Alphabets() {
  let box = "";
  for (let i = 0; i < 26; i++) {
    box += `<div class="child"><h3>${array[i]}</h3></div>`;
  }
  left_box.innerHTML = box;
}

//second  function to genereate random alphabates

function Generate_Alphabets_two() {
  box = "";
  for (let i = 0; i < 26; i += 2) {
    box += `<div class="child"><h3>${array[i]}</h3></div>`;
  }
  for (let i = 1; i < 26; i += 2) {
    box += `<div class="child"><h3>${array[i]}</h3></div>`;
  }
  left_box.innerHTML = box;
}

//computer genrated value
function Computer_value() {
  let value = array[Math.floor(Math.random() * array.length)];
  com_value.innerHTML = value;
}
//correct function
function cor_ans() {
  correct.style.transform = "translate(-50%,-50%) scale(1)";
}
// wrong function
function wrong_ans() {
  wrong.style.transform = "translate(-50%,-50%) scale(1)";
}

//checking values
fun_value = 0;
left_box.addEventListener("click", (dets) => {
  if (dets.target.innerText === com_value.innerText) {
    cor_ans();
    setTimeout(() => {
      correct.style.transform = "translate(-50%,-50%) scale(0)";
    }, 1000);
    if (fun_value % 2 == 0) {
      Generate_Alphabets();
      Computer_value();
      fun_value++;
    } else {
      Generate_Alphabets_two();
      Computer_value();
      fun_value++;
    }
  } else {
    wrong_ans();
    setTimeout(() => {
      wrong.style.transform = "translate(-50%,-50%) scale(0)";
    }, 1000);
  }
});

//rules
rule_btn.addEventListener("click", () => {
  rules_game.style.display = "block";
});

cross_game.addEventListener("click", () => {
  rules_game.style.display = "none";
});
Computer_value();
Generate_Alphabets_two();
