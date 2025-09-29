let arr1_genrated = [];
let arr_input = [];
let level = 0;
let start = false;
let max_score = 0;
let h1 = document.querySelector("h2");
let Score = document.querySelector(".score");
Score.innerHTML = `High Score : ${max_score}`;

document.addEventListener("keypress", function () {
  if (start == false) {
    start = true;
    arr_input_seq();
    Levelup();
  }
});

function Levelup() {
  arr_input = [];
  level++;
  h1.innerHTML = `Level ${level}`;
  arr_genrate_seq();
}

function arr_genrate_seq() {
  let box = Math.floor(Math.random() * 4 + 1);
  arr1_genrated.push(box);
  let flash = document.querySelector(`.box${box}`);
  div_flash(flash);
}

function div_flash(bttn) {
  bttn.classList.add("flash");
  setTimeout(() => {
    bttn.classList.remove("flash");
  }, 350);
}

function body_flash(bttn) {
  bttn.classList.add("flashbody");
  setTimeout(() => {
    bttn.classList.remove("flashbody");
  }, 500);
}

function arr_input_seq() {
  let boxes = document.querySelectorAll(".box1, .box2, .box3, .box4");
  boxes.forEach((box) => {
    box.addEventListener("click", color_clicked);
  });
}

function color_clicked(event) {
  let box_clicked = event.target.className.split(" ")[1][3];
  arr_input.push(box_clicked);
  let flash = document.querySelector(`.box${box_clicked}`);
  div_flash(flash);
  match(arr_input.length);
}

function match(idx) {
  if (arr_input[idx - 1] == arr1_genrated[idx - 1]) {
    if (arr_input.length == arr1_genrated.length) {
      setTimeout(Levelup, 1000);
    }
  } else {
    body_flash(document.querySelector("body"));
    h1.innerHTML = `GAME OVER!  Score: ${level} <br> Press any key to start!`;
    max_score = Math.max(max_score, level);
    Score.innerHTML = `High Score : ${max_score}`;
    arr1_genrated = [];
    arr_input = [];
    level = 0;
    start = false;
    remove_input_seq();
  }
}

function remove_input_seq() {
  let boxes = document.querySelectorAll(".box1, .box2, .box3, .box4");
  boxes.forEach((box) => {
    box.removeEventListener("click", color_clicked);
  });
}
