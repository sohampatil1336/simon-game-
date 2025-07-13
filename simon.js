let gameseq = [];
let userseq = [];
let level = 0;
let started = false;
let h2 = document.querySelector(".subheading");
let btns = ["box1", "box2", "box3", "box4"];
let score = 0;

document.addEventListener("keypress", function () {
  if (started === false) {
    started = true;
    levelUp();
  }
});

function levelUp() {
  userseq = [];
  level++;
  h2.innerText = `Level ${level}`;
  let randIdx = Math.floor(Math.random() * 4);
  let randBox = btns[randIdx];
  gameseq.push(randBox);
  let btn = document.querySelector("." + randBox);
  flash(btn);
}

function flash(btn) {
  btn.classList.add("flash");
  setTimeout(function () {
    btn.classList.remove("flash");
  }, 300);
}

function checking(idx) {
  if (userseq[idx] !== gameseq[idx]) {
    h2.innerText = "Game Over! Press Any Key to Restart";
    reset();
  } else if (userseq.length === gameseq.length) {
    setTimeout(function () {
      score++;
      levelUp();
    }, 1000);
  }
}

let allBtns = document.querySelectorAll(".box1, .box2, .box3, .box4");
for (let btn of allBtns) {
  btn.addEventListener("click", function () {
    let btnClass = btn.classList[0];
    userseq.push(btnClass);
    flash(btn);

    let idx = userseq.length - 1;
    checking(idx);  // Call the new function here
  });
}

function reset() {
  started = false;
  gameseq = [];
  userseq = [];
  level = 0;
  score = 0;
}
