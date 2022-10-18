// Set Varibles

let rulebtn = document.querySelector(".rules");
let rulediv = document.querySelector(".rule-div");
let ruleClose = document.querySelector(".close");
let playBtn = document.querySelector(".play");
let playDiv = document.querySelector(".play-div");
let score = document.querySelector(".sp-score");
let play = false;
let win = false;
// Set SCore With LOcal Storage
let triesFalse = 0;
let allScore = 0;
if (localStorage.getItem("Score")) {
  allScore = localStorage.getItem("Score");
}
if (localStorage.getItem("triesFalse")) {
  triesFalse = localStorage.getItem("triesFalse");
}
score.textContent = allScore;

// SHow Rules

rulebtn.addEventListener("click", () => {
  rulediv.classList.add("move");
});

// Remove Rules
ruleClose.addEventListener("click", () => {
  rulediv.classList.remove("move");
});

playBtn.onclick = function () {
  play = true;
  if (play !== false) {
    // step one
    playBtn.style.display = "none";
    // create elements
    let btn = document.createElement("button");
    btn.className = "btn";
    btn.textContent = "Choose";
    playDiv.append(btn);
    let imgs = document.createElement("div");
    imgs.className = "imgs";
    let rock = "rock";
    let paper = "paper";
    let scissors = "scissors";
    let img1 = document.createElement("img");
    img1.src = "images/icon-paper.svg";
    img1.id = `${paper}`;
    img1.dataset.count = "1";
    imgs.appendChild(img1);
    let img2 = document.createElement("img");
    img2.src = "images/icon-rock.svg";
    img2.id = `${rock}`;
    img2.dataset.count = "2";
    imgs.appendChild(img2);
    let img3 = document.createElement("img");
    img3.src = "images/icon-scissors.svg";
    img3.id = `${scissors}`;
    img3.dataset.count = "3";
    imgs.appendChild(img3);
    // step two
    let myimgs = [img1, img2, img3];
    myimgs.forEach((img) => {
      img.addEventListener("click", () => {
        btn.style.display = "none";
        imgs.style.display = "none";
        let mydiv = document.createElement("div");
        mydiv.className = "my-game playing";
        let p = document.createElement("p");
        p.textContent = "You Picked";
        mydiv.appendChild(p);
        mydiv.append(img);
        playDiv.appendChild(mydiv);
        let comdiv = document.createElement("div");
        comdiv.className = "my-game playing";
        let comp = document.createElement("p");
        comp.textContent = "The House Picked";
        comdiv.appendChild(comp);
        let opimg = document.createElement("img");
        let randomImg = Math.floor(Math.random() * 2);
        opimg.src = myimgs[randomImg].src;
        opimg.dataset.count = myimgs[randomImg].dataset.count;
        comdiv.append(opimg);
        playDiv.appendChild(comdiv);
        let result;
        // End DOM
        // Build Check Function
        let resultElemnt = document.createElement("p");
        resultElemnt.className = "result";
        if (img.dataset.count == "1") {
          if (opimg.dataset.count == "2") {
            allScore++;
            score.textContent = allScore;
            result = "You Win";
            resultElemnt.classList.add("win");
            localStorage.setItem("Score", allScore);
          } else {
            triesFalse++;
            result = "You Lose";
            resultElemnt.classList.add("lose");
            localStorage.setItem("triesFalse", triesFalse);
          }
        }
        if (img.dataset.count == "2") {
          if (opimg.dataset.count == "3") {
            allScore++;
            score.textContent = allScore;
            result = "You Win";
            resultElemnt.classList.add("win");

            localStorage.setItem("Score", allScore);
          } else {
            triesFalse++;
            result = "You Lose";
            resultElemnt.classList.add("lose");
            localStorage.setItem("triesFalse", triesFalse);
          }
        }
        if (img.dataset.count == "3") {
          if (opimg.dataset.count == "1") {
            allScore++;
            score.textContent = allScore;
            result = "You Win";
            resultElemnt.classList.add("win");
            localStorage.setItem("Score", allScore);
          } else {
            triesFalse++;
            result = "You Lose";
            resultElemnt.classList.add("lose");
            localStorage.setItem("triesFalse", triesFalse);
          }
        }
        resultElemnt.append(result);
        playDiv.append(resultElemnt);
        // Play Again Btn

        let pagain = document.createElement("button");
        pagain.textContent = "Play Again";
        pagain.className = "playagain";
        playDiv.append(pagain);
        pagain.onclick = function () {
          play = false;
          playDiv.removeChild(btn);
          playDiv.removeChild(mydiv);
          playDiv.removeChild(comdiv);
          playDiv.removeChild(pagain);
          playDiv.removeChild(imgs);
          playDiv.removeChild(resultElemnt);
          playBtn.style.display = "block";
        };
      });
    });
    playDiv.appendChild(imgs);
  }
};

document.querySelector(".score").addEventListener("click", function () {
  localStorage.clear();
  allScore = 0;
  score.textContent = allScore;
});
